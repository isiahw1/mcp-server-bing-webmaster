#!/usr/bin/env node

const { execSync } = require('child_process');

// Check if we're in a CI environment
const isCI = process.env.CI === 'true';

// Build command with appropriate flags
const buildCmd = isCI
  ? 'uv pip install --system --python /usr/bin/python3 -e .'
  : 'uv pip install --python /usr/bin/python3 -e .';

try {
  console.log('🔨 Building package...');
  execSync(buildCmd, { stdio: 'inherit' });
  console.log('✅ Build complete');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
