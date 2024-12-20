# System Architecture

## System Design
- **Frontend Layer**
  - Next.js App Router for server-side rendering and routing
  - React components with TypeScript for type-safe UI rendering
  - TipTap for rich text form fields
  - Tailwind CSS and DaisyUI for styling
  - Headless UI for accessible component primitives
  - React Virtual for efficient list rendering

- **Backend Layer**
  - Supabase for authentication and database
  - Next.js API routes for serverless functions
  - AWS SDK for cloud service integration

- **Data Layer**
  - Supabase PostgreSQL database
  - AWS services for document storage and processing
  - RAG-based chatbot system for form assistance

## Data Flow
- **Form Creation Pipeline**
  - AI-powered form field detection
  - Dynamic form template generation
  - Template validation and storage

- **Form Processing Pipeline**
  - User input validation
  - RAG-based completion assistance
  - Document generation from responses
  - Secure storage and management

- **Authentication Flow**
  1. **Route Protection**
     - Middleware intercepts requests to protected routes
     - Session validation using Supabase Auth
     - Unauthenticated users redirected to signin

  2. **Authentication Methods**
     - Google OAuth (pending provider setup)
       * Redirect to Google sign-in
       * Handle OAuth callback
       * Exchange code for session
     - Magic Link (pending email provider)
       * Collect user email
       * Send magic link email
       * Validate link and create session

  3. **Session Management**
     - AuthProvider context wraps application
     - Real-time session state updates
     - Automatic session refresh
     - Secure session storage

  4. **Access Control**
     - Role-based permissions (planned)
     - Resource-level access control (planned)
     - API route protection

## Components
- **Core Components**
  - AI Form Generator Engine
  - RAG Chatbot Assistant
  - Document Processing Pipeline
  - Template Management System
  - Field Detection Service
  - Data Validation Engine

- **Frontend Components**
  - Dynamic Form Builder Interface
  - Real-time Preview Component
  - Intelligent Form Renderer
  - Authentication Components
    * SignIn Page (/signin)
    * Auth Provider Context
    * Protected Route Wrapper
    * Auth Test Component

- **Backend Components**
  - Auth Callback Handler
  - Session Management Service
  - Access Control Middleware
  - API Route Protectors

## Deployment
- **Environment Setup**
  - Next.js application deployment
  - Supabase project configuration
  - Environment variables management
  - OAuth provider setup (pending)
  - Email service integration (pending)

## Schema
- **Authentication Tables**
  - Users (Supabase Auth)
  - Sessions
  - OAuth Connections
  - (Additional auth tables planned)
