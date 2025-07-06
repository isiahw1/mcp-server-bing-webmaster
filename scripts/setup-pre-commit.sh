#!/bin/bash

echo "Setting up pre-commit hooks..."

# Check if pre-commit is installed
if ! command -v pre-commit &> /dev/null; then
    echo "Installing pre-commit..."
    if command -v pip3 &> /dev/null; then
        pip3 install pre-commit
    elif command -v pip &> /dev/null; then
        pip install pre-commit
    else
        echo "Error: pip not found. Please install Python and pip first."
        exit 1
    fi
fi

# Install the pre-commit hooks
pre-commit install
pre-commit install --hook-type commit-msg

echo "✓ Pre-commit hooks installed successfully!"
echo ""
echo "Pre-commit will now run automatically before each commit to check for:"
echo "  - Secrets and credentials (TruffleHog)"
echo "  - Code formatting issues"
echo "  - JSON/YAML syntax errors"
echo "  - Large files"
echo "  - Direct commits to main branch"
echo ""
echo "To run pre-commit manually on all files:"
echo "  pre-commit run --all-files"
