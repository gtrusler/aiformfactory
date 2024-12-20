# Environment Setup

## Conda Environment
- Environment Name: aiformfactory-env
- Python Version: 3.x
- Channel Priority: conda-forge

## Package List
Core dependencies:
- python>=3.8
- pip

Additional dependencies to be determined based on project requirements.

## Installation Steps
1. Create conda environment:
```bash
conda create -n aiformfactory-env python=3.8
```

2. Activate environment:
```bash
conda activate aiformfactory-env
```

3. Install dependencies:
```bash
conda install -c conda-forge [packages]
```

## Migration Notes
- Project uses conda for environment management
- Dependencies are managed through environment.yml
- Regular environment exports for version control
