# Code Style Guide

## Function Guidelines
- Keep functions under 15 lines
- Single responsibility principle
- Use TypeScript types for all parameters
- Write JSDoc/TSDoc comments
- Meaningful parameter names
- Async/await for promises

## Programming Patterns
- React functional components
- Custom hooks for shared logic
- Server components when possible
- RAG-based AI interactions
- Form state management patterns
- Error boundary implementation
- SOLID principles adherence

## Project Structure
aiformfactory/
├── app/                # Next.js pages and routes
├── components/        # Shared React components
├── hooks/            # Custom React hooks
├── libs/             # Shared utilities
├── types/           # TypeScript definitions
└── utils/           # Helper functions

## Component Guidelines
- Use TypeScript for all components
- Implement proper prop types
- Handle loading and error states
- Follow accessibility guidelines
- Use Headless UI for base components
- Implement proper form validation
- Follow React best practices

## Naming Conventions
- React Components: PascalCase
- Functions/Variables: camelCase
- Files: kebab-case
- Constants: UPPER_SNAKE_CASE
- Types/Interfaces: PascalCase

## Style Guidelines
- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use CSS modules when needed
- Follow component composition patterns
