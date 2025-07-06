# Getting Started with Claude Desktop

This guide will help you set up the Bing Webmaster Tools MCP server with Claude Desktop.

## Prerequisites

- Claude Desktop installed ([Download here](https://claude.ai/download))
- Node.js 16+ installed (for npx command)
- Bing Webmaster API key ([Get it here](https://www.bing.com/webmasters))

## Setup Steps

### 1. Open Claude Desktop Settings

1. Launch Claude Desktop
2. Click on `Claude` menu → `Settings`
3. Select `Developer` from the sidebar
4. Click the `Edit Config` button

### 2. Add the MCP Server Configuration

Add the following to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "bing-webmaster": {
      "command": "npx",
      "args": ["-y", "@isiahw1/mcp-server-bing-webmaster@latest"],
      "env": {
        "BING_WEBMASTER_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

**Important:** Replace `your_api_key_here` with your actual Bing Webmaster API key.

### 3. Save and Restart

1. Save the configuration file
2. Completely quit Claude Desktop (Cmd+Q on macOS, Alt+F4 on Windows)
3. Restart Claude Desktop

## Configuration File Locations

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

## Verify Installation

After restarting, you should see:
- The MCP server icon in the bottom of your chat interface
- "bing-webmaster" listed when you click on the MCP icon

Try these commands to verify:
```
"Show me all my sites in Bing Webmaster Tools"
"What are my crawl statistics?"
```

## Troubleshooting

### "Could not attach to MCP server" Error

1. **Check the logs:**
   - Go to Settings → Developer
   - Click "Open Logs Folder"
   - Look for error messages in the most recent log file

2. **Common causes:**
   - Incorrect API key
   - Missing Node.js/npx installation
   - Syntax error in the JSON configuration
   - Old cached version (try clearing npm cache)

### "spawn npx ENOENT" Error

This means npx is not found. Solutions:
1. Install Node.js from [nodejs.org](https://nodejs.org)
2. Ensure Node.js is in your system PATH
3. Restart your computer after installing Node.js

### API Key Issues

1. Verify your API key:
   - Log in to [Bing Webmaster Tools](https://www.bing.com/webmasters)
   - Go to Settings → API Access
   - Regenerate key if needed

2. Check for typos in the configuration
3. Ensure the API key is enclosed in quotes

### Force Latest Version

If you're getting an old cached version:
```json
{
  "mcpServers": {
    "bing-webmaster": {
      "command": "npx",
      "args": ["--yes", "@isiahw1/mcp-server-bing-webmaster@latest"],
      "env": {
        "BING_WEBMASTER_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## Advanced Configuration

### Using a Specific Version
```json
{
  "mcpServers": {
    "bing-webmaster": {
      "command": "npx",
      "args": ["-y", "@isiahw1/mcp-server-bing-webmaster@1.0.1"],
      "env": {
        "BING_WEBMASTER_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Using Environment Variables
If you prefer not to store your API key in the config:

1. Set environment variable in your shell profile:
   ```bash
   export BING_WEBMASTER_API_KEY="your_api_key_here"
   ```

2. Use this configuration:
   ```json
   {
     "mcpServers": {
       "bing-webmaster": {
         "command": "npx",
         "args": ["-y", "@isiahw1/mcp-server-bing-webmaster@latest"]
       }
     }
   }
   ```

### Multiple MCP Servers
You can run multiple MCP servers simultaneously:
```json
{
  "mcpServers": {
    "bing-webmaster": {
      "command": "npx",
      "args": ["-y", "@isiahw1/mcp-server-bing-webmaster@latest"],
      "env": {
        "BING_WEBMASTER_API_KEY": "your_api_key_here"
      }
    },
    "another-server": {
      "command": "npx",
      "args": ["another-mcp-server"]
    }
  }
}
```

## Next Steps

- Explore the [full list of available tools](../README.md#available-tools)
- Check out [usage examples](../README.md#usage-examples)
- Learn about [API quotas and limits](https://www.bing.com/webmaster/help/webmaster-api-limits)

## Support

If you encounter issues:
1. Check the [troubleshooting section](#troubleshooting)
2. Review the logs in Settings → Developer → Open Logs Folder
3. Check [GitHub Issues](https://github.com/isiahw1/mcp-server-bing-webmaster/issues)
4. Open a new issue with your configuration and error logs
