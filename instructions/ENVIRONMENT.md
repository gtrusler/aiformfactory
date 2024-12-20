# Environment Setup

## Development Requirements
- Node.js >= 18.x
- Python >= 3.8
- Conda package manager
- Git

## Conda Environment
- Environment Name: aiformfactory-env
- Python Version: 3.8+
- Channel Priority: conda-forge

## Package Management
### Node.js Dependencies
```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "typescript": "latest",
    "tailwindcss": "latest",
    "@headlessui/react": "latest",
    "@tiptap/react": "latest",
    "react-virtual": "latest",
    "@supabase/supabase-js": "latest",
    "aws-sdk": "latest"
  },
  "devDependencies": {
    "@types/react": "latest",
    "@types/node": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "patch-package": "latest"
  }
}
```

### Python Dependencies
Core dependencies:
- python>=3.8
- pip
- supabase
- aws-sdk-python
- transformers
- pytorch
- langchain

## Installation Steps
1. Clone repository and setup Node.js:
```bash
npm install
```

2. Create conda environment:
```bash
conda create -n aiformfactory-env python=3.8
```

3. Activate environment:
```bash
conda activate aiformfactory-env
```

4. Install Python dependencies:
```bash
conda install -c conda-forge pytorch transformers
pip install supabase langchain boto3
```

5. Configure development tools:
```bash
npm install -D eslint eslint-config-next
npx eslint --init
```

## Environment Variables
Required environment variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
AWS_ACCESS_KEY_ID=your_aws_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=your_aws_region
```

## Development Server
Start the development server:
```bash
npm run dev
```

## Migration Notes
- Project uses conda for Python environment management
- Node.js dependencies managed through package.json
- Dependencies are tracked in environment.yml and package.json
- Regular environment exports for version control
- Use patch-package for any npm package patches
