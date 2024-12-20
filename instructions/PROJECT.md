# Project Overview

AI Form Factory: An intelligent document automation system that combines AI-powered form generation with advanced processing capabilities.

## Goals
- Create an AI-powered system for dynamic form generation and management
- Implement intelligent form field detection and processing
- Develop RAG-based chatbot for guided form completion
- Enable automated document generation from form responses
- Provide secure document storage and management

## Tech Stack
- **Frontend Framework**: Next.js (React-based)
- **Language**: TypeScript/JavaScript
- **Styling**: Tailwind CSS, DaisyUI
- **Authentication**: 
  - Supabase Auth
  - OAuth Providers (Google - pending setup)
  - Magic Link Authentication (pending email provider)
- **Database**: Supabase
- **UI Components**:
  - Headless UI for accessible components
  - TipTap for rich text editing
  - React Virtual for virtualized lists
- **Cloud Services**: AWS SDK integration
- **Development Tools**:
  - ESLint for code linting
  - TypeScript for type safety
  - Patch-package for dependency patching

## Authentication System
- **Protected Routes**: Middleware-based route protection
- **Auth Methods**: 
  - Google OAuth (pending provider setup)
  - Magic Link Email (pending email provider)
- **State Management**: React Context with Supabase Auth
- **User Flow**:
  1. Unauthenticated users redirected to /signin
  2. Choice of authentication methods
  3. Post-auth callback handling
  4. Redirect to protected dashboard

## Project Structure
```
aiformfactory/
├── app/                    # Next.js app directory
│   ├── api/               # API routes including auth callbacks
│   ├── dashboard/         # Protected dashboard routes
│   └── signin/           # Authentication pages
├── components/            # Reusable React components
├── hooks/                # Custom React hooks
├── instructions/         # Project documentation
├── libs/                 # Shared libraries and utilities
├── public/              # Static assets
├── store/               # State management
├── supabase/            # Supabase configuration
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## Resources and URLs
- Project Repository: [Repository URL]
- Documentation: [Documentation URL]
- Issue Tracker: [Issue Tracker URL]
- Supabase Dashboard: [Pending - Add Supabase project URL]

## Team
- [Team members to be added]
