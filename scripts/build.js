#!/usr/bin/env node

const { execSync } = require('child_process');

// Check if we're in a CI environment
const isCI = process.env.CI === 'true';

// Determine Python executable
let pythonCmd = 'python3';
if (process.env.pythonLocation) {
  // GitHub Actions sets pythonLocation
  pythonCmd = `${process.env.pythonLocation}/bin/python`;
}

// Build command with appropriate flags
const buildCmd = isCI
  ? `uv pip install --system --python ${pythonCmd} -e .`
  : `uv pip install --python ${pythonCmd} -e .`;

try {
  console.log('🔨 Building package...');
  console.log(`Using Python: ${pythonCmd}`);
  execSync(buildCmd, { stdio: 'inherit' });
  console.log('✅ Build complete');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
