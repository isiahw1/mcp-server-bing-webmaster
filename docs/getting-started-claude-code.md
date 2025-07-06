# Getting Started with Claude Code

This guide will help you set up the Bing Webmaster Tools MCP server with Claude Code.

## Prerequisites

- Claude Code CLI installed ([Download here](https://claude.ai/code))
- Node.js 16+ installed
- Bing Webmaster API key ([Get it here](https://www.bing.com/webmasters))

## Setup Steps

### 1. Add the MCP Server

Run this command to add the Bing Webmaster MCP server to Claude Code:

```bash
claude mcp add bing-webmaster -- npx -y @isiahw1/mcp-server-bing-webmaster@latest
```

### 2. Set Your API Key

#### Option A: Environment Variable
```bash
export BING_WEBMASTER_API_KEY="your_api_key_here"
```

#### Option B: Using .env File
Create a `.env` file in your project directory:
```
BING_WEBMASTER_API_KEY=your_api_key_here
```

### 3. Launch Claude Code

```bash
claude
```

## Verify Installation

Once launched, try these commands to verify the setup:

```
"Show me all my sites in Bing Webmaster Tools"
"What's my URL submission quota?"
```

## Troubleshooting

### Enable Debug Mode
If you're experiencing issues, run Claude Code with debug logging:
```bash
claude --mcp-debug
```

### Common Issues

**"Cannot find MCP server" error:**
- Ensure you've run the `claude mcp add` command
- Check that Node.js is installed: `node --version`

**"Invalid API key" error:**
- Verify your API key is correct
- Make sure the environment variable is set: `echo $BING_WEBMASTER_API_KEY`

**"spawn ENOENT" error:**
- This usually means npx can't be found
- Ensure Node.js and npm are in your PATH

### Checking Logs
Look for messages like:
```
MCP server "bing-webmaster" Server stderr: Starting Bing Webmaster MCP server...
```

## Advanced Usage

### Using a Specific Version
```bash
claude mcp add bing-webmaster -- npx -y @isiahw1/mcp-server-bing-webmaster@1.0.1
```

### Using Local Development Version
```bash
# From your development directory
cd /path/to/mcp-server-bing-webmaster
claude mcp add bing-webmaster-dev -- uv run python -m mcp_server_bwt
```

## Next Steps

- Explore the [full list of available tools](../README.md#available-tools-42-total)
- Check out [usage examples](../README.md#usage-examples)
- Learn about [API quotas and limits](https://www.bing.com/webmaster/help/webmaster-api-limits)

## Support

If you encounter issues:
1. Check the [troubleshooting section](#troubleshooting)
2. Review [GitHub Issues](https://github.com/isiahw1/mcp-server-bing-webmaster/issues)
3. Open a new issue with debug logs
