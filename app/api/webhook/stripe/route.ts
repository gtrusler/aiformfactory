import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { upsertSubscription, addCreditsToCustomer } from '@/app/utils/stripe-supabase-admin';
import config from '@/config';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing env.STRIPE_SECRET_KEY');
}
if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error('Missing env.STRIPE_WEBHOOK_SECRET');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
  typescript: true,
});

const relevantEvents = new Set([
  'customer.subscription.created',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'invoice.payment_succeeded',
  'checkout.session.completed',
]);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature');

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return new NextResponse(`Webhook Error: ${err instanceof Error ? err.message : 'Unknown Error'}`, { status: 400 });
  }

  if (relevantEvents.has(event.type)) {
    try {
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        
        if (session.mode === 'payment' && session.payment_status === 'paid') {
          const expandedSession = await stripe.checkout.sessions.retrieve(session.id, {
            expand: ['line_items.data.price']
          });
          
          const priceId = expandedSession.line_items.data[0].price.id;
          const customerId = expandedSession.customer as string;
          const plan = config.stripe.plans.find(price => price.priceId === priceId);
          await addCreditsToCustomer(plan, customerId)
        }
      } else if (event.type === 'customer.subscription.created' || 
                 event.type === 'customer.subscription.updated' || 
                 event.type === 'customer.subscription.deleted') {
        const subscription = event.data.object as Stripe.Subscription;
        await upsertSubscription(
          subscription.id,
          subscription.customer as string
        );
      } else if (event.type === 'invoice.payment_succeeded') {
        const invoice = event.data.object as Stripe.Invoice;
        
        if (invoice.billing_reason === 'subscription_create') {
          const subscriptionId = invoice.subscription as string;
          const paymentIntentId = invoice.payment_intent as string;

          const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

          try {
            await stripe.subscriptions.update(
              subscriptionId,
              {
                default_payment_method: paymentIntent.payment_method as string,
              }
            );

            console.log("Default payment method set for subscription:", paymentIntent.payment_method);
          } catch (err) {
            console.error("Failed to update the default payment method for subscription:", subscriptionId, err);
          }
        }
      } else if (event.type === 'invoice.payment_failed') {
        // If the payment fails or the customer does not have a valid payment method,
        //  an invoice.payment_failed event is sent, the subscription becomes past_due.
        // Use this webhook to notify your user that their payment has
        // failed and to retrieve new card details.
      } else if (event.type === 'invoice.finalized') {
        // If you want to manually send out invoices to your customers
        // or store them locally to reference to avoid hitting Stripe rate limits.
      } else {
        throw new Error('Unhandled relevant event!');
      }
    } catch (error) {
      console.error('Error processing webhook:', error);
      return new NextResponse('Webhook handler failed', { status: 500 });
    }
  }
  return new NextResponse(null, { status: 200 });
}