# Project Documentation Guide

This directory contains the project's living documentation. Each file serves a specific purpose and should be updated according to the guidelines below.

## Initial Setup

### New Project Checklist
1. Create the `/instructions` directory if it doesn't exist
2. Initialize each documentation file:
   ```bash
   # Required files in order of creation
   1. README.md    # This documentation guide
   2. PROJECT.md   # Project overview and goals
   3. CHANGELOG.md # Track all changes
   4. LEARNINGS.md # Technical insights and status
   5. ARCHITECTURE.md # System design
   6. CONTRIBUTING.md # Contribution guide
   ```

### File Templates
Use these templates when creating new documentation files:

#### PROJECT.md Template
```markdown
# Project Overview

[Brief project description]

## Goals
- [Primary goal 1]
- [Primary goal 2]

## Tech Stack
- [Technology 1]: [Purpose]
- [Technology 2]: [Purpose]

## Project Structure
\`\`\`
project/
├── [directory 1]/    # [purpose]
├── [directory 2]/    # [purpose]
\`\`\`

## Resources and URLs
- [Resource 1]: [URL]
- [Resource 2]: [URL]

## Team
- [Role 1]: [Name]
- [Role 2]: [Name]
```

#### CHANGELOG.md Template
```markdown
# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]
### Added
### Changed
### Fixed
### Security
```

#### LEARNINGS.md Template
```markdown
# Technical Learnings

## Current Status (as of [DATE])
### Implementation Status
#### ✅ Completed
#### 🚧 In Progress

### Immediate Next Steps
### Testing Checklist

## Solutions
## Patterns
## Performance Insights
## Tools and Libraries
```

#### ARCHITECTURE.md Template
```markdown
# System Architecture

## System Design
## Data Flow
## Components
## Deployment
## Schema
```

#### CONTRIBUTING.md Template
```markdown
# Contributing Guide

## Development Setup
## Coding Standards
## Review Process
## Tools and Requirements
## Environment Setup
```

## Documentation Files

### 📄 PROJECT.md
**Purpose**: High-level project overview and current state
**When to Update**:
- New features or goals added
- Tech stack changes
- Team changes
- Resource URLs added/changed

**Key Sections**:
```markdown
- Project Overview
- Goals
- Tech Stack
- Project Structure
- Resources and URLs
- Team
```

### 📝 CHANGELOG.md
**Purpose**: Track all notable changes
**When to Update**:
- Immediately after making any significant change:
  - Features added
  - Bugs fixed
  - Breaking changes
  - Security updates
  - Dependencies updated

**Key Sections**:
```markdown
- [Unreleased]
  - Added
  - Changed
  - Fixed
  - Security
```

### 🎓 LEARNINGS.md
**Purpose**: Document technical insights and current status
**When to Update**:
- At the start of work (review status)
- When solving technical problems
- When discovering new patterns
- When hitting performance issues
- Before ending work (update status)

**Key Sections**:
```markdown
- Current Status
  - Implementation Status
  - Blocking Issues
  - Next Steps
  - Testing Checklist
- Solutions
- Patterns
- Performance Insights
- Tools and Libraries
```

### 🏗 ARCHITECTURE.md
**Purpose**: System design and technical architecture
**When to Update**:
- System design changes
- New components added
- Data flow modifications
- Schema updates
- Deployment changes

**Key Sections**:
```markdown
- System Design
- Data Flow
- Components
- Deployment
- Schema
```

### 👥 CONTRIBUTING.md
**Purpose**: Guide for new contributors
**When to Update**:
- Development setup changes
- Coding standards updates
- Review process changes
- New tools/requirements
- Environment setup changes

**Key Sections**:
```markdown
- Development Setup
- Coding Standards
- Review Process
- Tools and Requirements
- Environment Setup
```

## Documentation Workflow

### 1. Starting Work
1. Check for `/instructions` directory
   ```bash
   if [ ! -d "instructions" ]; then
     mkdir instructions
     # Initialize documentation files
     touch instructions/README.md
     touch instructions/PROJECT.md
     touch instructions/CHANGELOG.md
     touch instructions/LEARNINGS.md
     touch instructions/ARCHITECTURE.md
     touch instructions/CONTRIBUTING.md
   fi
   ```
2. Check for required documentation files
   ```bash
   for file in README.md PROJECT.md CHANGELOG.md LEARNINGS.md ARCHITECTURE.md CONTRIBUTING.md; do
     if [ ! -f "instructions/$file" ]; then
       echo "Creating missing file: $file"
       # Use templates from this guide to create file
     fi
   done
   ```
3. Review or initialize documentation
4. Pull latest changes
5. Review current status

### 2. During Development
1. Update CHANGELOG.md for significant changes
2. Document solutions in LEARNINGS.md
3. Update ARCHITECTURE.md for design changes
4. Keep current status updated in LEARNINGS.md

### 3. Before Ending Work
1. Update current status in LEARNINGS.md
2. Add any new changes to CHANGELOG.md
3. Review and update other docs as needed
4. Commit documentation updates

## Best Practices
1. **Keep It Current**
   - Update docs as you go
   - Don't wait until the end
   - Document decisions while fresh

2. **Be Specific**
   - Include dates
   - Name specific tools/versions
   - Link to relevant resources
   - List exact steps

3. **Think of Others**
   - Write for future team members
   - Explain the "why"
   - Include examples
   - Link between docs

4. **Format Consistently**
   - Use markdown formatting
   - Keep sections organized
   - Use clear headings
   - Include code blocks

## Documentation vs Git
- Git tracks code changes
- Documentation explains:
  - Current status
  - Design decisions
  - Known issues
  - Future plans
  - Setup instructions

## Updating Documentation
1. **Be Concise**
   - Keep updates focused
   - Remove outdated info
   - Use bullet points
   - Link don't repeat

2. **Include Context**
   - Add dates to updates
   - Reference ticket numbers
   - Link to related docs
   - Explain impact

3. **Review Regularly**
   - Start of work
   - During development
   - Before commits
   - End of work
