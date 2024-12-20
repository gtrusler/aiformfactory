# Contributing Guide

## Project Documentation

This project follows a structured documentation system. All documentation is stored in the `/instructions` directory.

### First Time Setup

1. **Check Documentation**
   ```bash
   # 1. Verify instructions directory exists
   if [ ! -d "instructions" ]; then
     echo "Creating instructions directory..."
     mkdir instructions
   fi

   # 2. Check for documentation guide
   if [ ! -f "instructions/README.md" ]; then
     echo "Documentation guide missing. Creating from template..."
     # Copy README.md template or get from project template repository
   fi
   ```

2. **Review Documentation Guide**
   - Read `/instructions/README.md` for:
     * Documentation structure
     * File templates
     * Update workflows
     * Best practices

3. **Initialize Missing Files**
   - Follow templates in README.md
   - Create in this order:
     1. PROJECT.md
     2. CHANGELOG.md
     3. LEARNINGS.md
     4. ARCHITECTURE.md
     5. CONTRIBUTING.md

## Development Workflow

### 1. Starting Work
```bash
# Review or initialize documentation
cd /path/to/project

# Check instructions directory
if [ ! -d "instructions" ]; then
  echo "Creating instructions directory..."
  mkdir instructions
  # Follow setup steps in instructions/README.md
fi

# Check required files
required_files=("README.md" "PROJECT.md" "CHANGELOG.md" "LEARNINGS.md" "ARCHITECTURE.md" "CONTRIBUTING.md")

for file in "${required_files[@]}"; do
  if [ ! -f "instructions/$file" ]; then
    echo "Missing $file - Please create using template from instructions/README.md"
  fi
done

# 1. Pull latest changes
git pull origin main

# 2. Review Documentation
- Check /instructions folder:
  - PROJECT.md for overall status
  - CHANGELOG.md for recent changes
  - LEARNINGS.md for current blockers
  - ARCHITECTURE.md for system design
```

### 2. During Development
```bash
# 1. Regular Documentation Updates
- Update CHANGELOG.md when you:
  - Add features
  - Fix bugs
  - Make breaking changes
  - Update dependencies

- Update LEARNINGS.md when you:
  - Solve technical problems
  - Discover new patterns
  - Hit performance issues
  - Find useful tools

- Update ARCHITECTURE.md when you:
  - Change system design
  - Add new components
  - Modify data flow
  - Update schema

# 2. Code Changes
- Write clear commit messages
- Keep changes focused
- Add inline documentation
- Update types and tests
```

### 3. Ending Work
```bash
# 1. Status Update
- Update LEARNINGS.md with:
  - Current status
  - Blocking issues
  - Next steps
  - Testing checklist

# 2. Documentation Review
- Verify all docs are current
- Add any missing information
- Update progress trackers
- List new requirements

# 3. Code Cleanup
- Clean up debug code
- Remove unused imports
- Format code
- Run linter

# 4. Commit and Push
git add .
git commit -m "feat/fix/docs: descriptive message"
git push origin main
```

## Documentation vs Git

### Git's Role
- **Version Control**
  - Track code changes
  - Manage branches
  - Handle merges
  - Store history

- **Commit Messages**
  - What changed
  - Why it changed
  - Reference issues
  - Tag changes (feat/fix/docs)

### Documentation's Role
- **Project Status**
  - Current implementation state
  - Known issues and blockers
  - Next steps and TODOs
  - Testing status

- **Technical Knowledge**
  - Architecture decisions
  - Implementation patterns
  - Performance insights
  - Setup instructions

- **Team Communication**
  - Project goals
  - Development standards
  - Contribution guidelines
  - Environment setup

## Development Setup
1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd aiformfactory
   ```

2. **Environment Setup**
   ```bash
   # Copy environment template
   cp .env.example .env.local
   
   # Required environment variables:
   - NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   - NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   - STRIPE_SECRET_KEY=your-stripe-secret
   - STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
   ```

3. **Authentication Setup**
   - Create a Supabase project at https://supabase.com
   - Configure authentication providers:
     * Google OAuth (pending)
       1. Create Google Cloud project
       2. Configure OAuth consent screen
       3. Create OAuth client credentials
       4. Add credentials to Supabase
     * Magic Link Email (pending)
       1. Configure SMTP settings in Supabase
       2. Test email delivery
   - Update environment variables with Supabase credentials

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

## Coding Standards
- Use TypeScript for type safety
- Follow ESLint configuration
- Use Next.js best practices
- Implement proper error handling
- Write meaningful commit messages

## Review Process
1. Create feature branch from main
2. Make changes and test locally
3. Submit pull request with description
4. Address review comments
5. Merge after approval

## Tools and Requirements
- Node.js 18+
- npm or yarn
- Git
- VS Code (recommended)
- Supabase CLI (optional)

## Environment Setup
### Authentication Testing
1. Visit http://localhost:3000/dashboard
2. Should redirect to /signin
3. Test authentication methods:
   - Google OAuth (pending setup)
   - Magic Link (pending email provider)
4. Verify redirect to dashboard
5. Check auth state in AuthTest component
