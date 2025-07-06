# GitHub Actions Workflows

This directory contains automated workflows for CI/CD:

## Workflows

### 1. CI (`ci.yml`)
- **Triggers**: Pull requests and pushes to non-main branches
- **Purpose**: Run tests and validation on multiple OS and runtime versions
- **Matrix**: Tests on Ubuntu, Windows, macOS with Node.js 18.x/20.x and Python 3.10/3.11/3.12

### 2. Publish (`publish.yml`)
- **Triggers**:
  - Push to main branch
  - GitHub release creation
  - Manual workflow dispatch
- **Purpose**: Automatically publish to npm when version changes
- **Features**:
  - Checks if version already exists on npm
  - Only publishes new versions
  - Creates GitHub releases automatically

### 3. Version Bump (`version-bump.yml`)
- **Triggers**: Manual workflow dispatch
- **Purpose**: Bump version numbers in both package.json and Python files
- **Options**: patch, minor, or major version bumps

## Setup Required

### 1. NPM Token
1. Go to https://www.npmjs.com/
2. Sign in to your account
3. Click on your profile → Access Tokens
4. Generate a new Classic Token with "Automation" type
5. Copy the token

### 2. Add Secret to GitHub
1. Go to your repository settings
2. Navigate to Secrets and variables → Actions
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Paste your npm token
6. Click "Add secret"

## Usage

### Automatic Publishing
1. Update version in `package.json`
2. Update version in `mcp_server_bwt/version.py`
3. Commit and push to main
4. GitHub Actions will automatically publish to npm

### Manual Version Bump
1. Go to Actions tab in GitHub
2. Select "Version Bump" workflow
3. Click "Run workflow"
4. Select version type (patch/minor/major)
5. The workflow will:
   - Bump versions in both files
   - Create commits
   - Push changes back to main
   - Trigger the publish workflow

### Creating a Release
1. Go to Releases in GitHub
2. Click "Create a new release"
3. Create a tag (e.g., v1.0.1)
4. The publish workflow will automatically run

## Best Practices

1. Always ensure tests pass before merging to main
2. Use semantic versioning (major.minor.patch)
3. Keep package.json and Python versions in sync
4. Add `[skip ci]` to commit messages to skip CI runs
