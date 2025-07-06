#!/usr/bin/env node

/**
 * Pre-publish validation script
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let errors = 0;

console.log('🔍 Running pre-publish validation...\n');

// Check required files exist
const requiredFiles = [
  'package.json',
  'README.md',
  'LICENSE',
  'run.js',
  '.env.example',
  'mcp_server_bwt/__init__.py',
  'mcp_server_bwt/main.py',
  'pyproject.toml'
];

console.log('📁 Checking required files...');
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(__dirname, '..', file))) {
    console.error(`   ❌ Missing required file: ${file}`);
    errors++;
  } else {
    console.log(`   ✅ ${file}`);
  }
}

// Check for sensitive files
console.log('\n🔒 Checking for sensitive files...');
const sensitiveFiles = ['.env', 'config/local.json', 'secrets/'];
for (const file of sensitiveFiles) {
  if (fs.existsSync(path.join(__dirname, '..', file))) {
    console.error(`   ❌ Sensitive file found: ${file} (should not be published)`);
    errors++;
  }
}
console.log('   ✅ No sensitive files detected');

// Validate package.json
console.log('\n📦 Validating package.json...');
try {
  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));

  if (!pkg.name || !pkg.version || !pkg.license) {
    console.error('   ❌ Missing required package.json fields');
    errors++;
  } else {
    console.log('   ✅ Required fields present');
  }

  if (!pkg.repository || !pkg.bugs || !pkg.homepage) {
    console.warn('   ⚠️  Missing recommended fields (repository, bugs, homepage)');
  }
} catch (e) {
  console.error('   ❌ Invalid package.json');
  errors++;
}

// Check Python files for syntax
console.log('\n🐍 Checking Python syntax...');
try {
  execSync('python3 -m py_compile mcp_server_bwt/main.py', { cwd: path.join(__dirname, '..') });
  console.log('   ✅ Python syntax valid');
} catch (e) {
  console.error('   ❌ Python syntax error');
  errors++;
}

// Final result
console.log('\n' + '='.repeat(50));
if (errors === 0) {
  console.log('✅ All validation checks passed!');
  process.exit(0);
} else {
  console.error(`❌ Validation failed with ${errors} error(s)`);
  process.exit(1);
}
