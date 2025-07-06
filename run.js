#!/usr/bin/env node

/**
 * MCP Server for Bing Webmaster Tools
 *
 * This script runs the Python-based MCP server using the system Python
 * or a virtual environment if available.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Check if we're in development (has .venv) or production
const projectRoot = path.dirname(__filename);
const venvPath = path.join(projectRoot, '.venv');
const venvPython = path.join(venvPath, process.platform === 'win32' ? 'Scripts/python.exe' : 'bin/python');

// Determine which Python to use
let pythonCommand;
if (fs.existsSync(venvPython)) {
  pythonCommand = venvPython;
} else {
  // In production, we'll need Python installed
  pythonCommand = process.platform === 'win32' ? 'python' : 'python3';
}

// Run the MCP server
const args = ['-m', 'mcp_server_bwt'];
const child = spawn(pythonCommand, args, {
  cwd: projectRoot,
  stdio: 'inherit',
  env: { ...process.env }
});

// Handle process termination
process.on('SIGINT', () => {
  child.kill('SIGINT');
  process.exit();
});

process.on('SIGTERM', () => {
  child.kill('SIGTERM');
  process.exit();
});

child.on('error', (error) => {
  console.error(`Failed to start MCP server: ${error.message}`);
  console.error('Please ensure Python 3.10+ is installed and available in your PATH');
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
