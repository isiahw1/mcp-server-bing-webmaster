#!/usr/bin/env node

/**
 * Sync version between package.json and Python version file
 */

const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const versionPyPath = path.join(__dirname, '..', 'mcp_server_bwt', 'version.py');

// Read package.json version
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;

// Update Python version file
const versionPyContent = `__version__ = "${version}"\n`;
fs.writeFileSync(versionPyPath, versionPyContent);

console.log(`✓ Synced version ${version} to Python file`);
