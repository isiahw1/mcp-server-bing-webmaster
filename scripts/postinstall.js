#!/usr/bin/env node

/**
 * Post-install script to verify Python is available
 */

const { execSync } = require('child_process');

console.log('\n🔧 MCP Server for Bing Webmaster Tools - Post Install');
console.log('================================================\n');

// Check Python installation
try {
  const pythonCommand = process.platform === 'win32' ? 'python' : 'python3';
  const pythonVersion = execSync(`${pythonCommand} --version`, { encoding: 'utf8' }).trim();

  // Extract version number
  const versionMatch = pythonVersion.match(/Python (\d+)\.(\d+)\.(\d+)/);
  if (versionMatch) {
    const major = parseInt(versionMatch[1]);
    const minor = parseInt(versionMatch[2]);

    if (major >= 3 && minor >= 10) {
      console.log('✅ Python requirement satisfied: ' + pythonVersion);
    } else {
      console.log('⚠️  Python 3.10 or higher is required. Found: ' + pythonVersion);
      console.log('   Please upgrade Python before using this package.');
    }
  }
} catch (error) {
  console.log('❌ Python is not installed or not in PATH');
  console.log('   This package requires Python 3.10 or higher to run.');
  console.log('   Please install Python from https://www.python.org/');
}

console.log('\n📚 Documentation:');
console.log('   https://github.com/isiahw1/mcp-server-bing-webmaster');

console.log('\n🔑 Next Steps:');
console.log('   1. Get your Bing Webmaster API key from https://www.bing.com/webmasters');
console.log('   2. Configure Claude Desktop with your API key');
console.log('   3. Start using powerful Bing Webmaster tools!\n');
