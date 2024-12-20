'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import toast from 'react-hot-toast';

export default function AuthTest() {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    // Get initial session
    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Error signing out');
    }
  };

  if (loading) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Auth Test Component</h2>
        
        <div className="divider">Authentication State</div>
        
        <div className="space-y-4">
          <div>
            <span className="font-semibold">Status: </span>
            <span className={`badge ${user ? 'badge-success' : 'badge-error'}`}>
              {user ? 'Authenticated' : 'Not Authenticated'}
            </span>
          </div>

          {user && (
            <>
              <div>
                <span className="font-semibold">User ID: </span>
                <span className="font-mono">{user.id}</span>
              </div>
              
              <div>
                <span className="font-semibold">Email: </span>
                <span>{user.email}</span>
              </div>

              {user.user_metadata && (
                <div>
                  <span className="font-semibold">Metadata: </span>
                  <pre className="bg-base-200 p-2 rounded-lg overflow-x-auto">
                    {JSON.stringify(user.user_metadata, null, 2)}
                  </pre>
                </div>
              )}
            </>
          )}

          {user && (
            <div className="card-actions justify-end">
              <button 
                className="btn btn-error" 
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
