# MCP Server for Bing Webmaster Tools

[![npm version](https://badge.fury.io/js/@isiahw1%2Fmcp-server-bing-webmaster.svg)](https://badge.fury.io/js/@isiahw1%2Fmcp-server-bing-webmaster)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![Node](https://img.shields.io/badge/node-%3E%3D16.0.0-green.svg)](https://nodejs.org/)

An MCP (Model Context Protocol) server that provides access to Bing Webmaster Tools functionality through Claude and other MCP-compatible AI assistants.

## Features

- 🚀 **Direct API Integration**: Simple and reliable access to Bing Webmaster Tools
- 📊 **Comprehensive Features**: Site management, traffic analytics, crawl data, and more
- 🛡️ **Error Handling**: Robust error handling with detailed logging
- 🎯 **MCP Compliant**: Full compatibility with Model Context Protocol
- 📈 **Rich Functionality**: URL submission, keyword analysis, sitemap management, and more

## Installation

### Prerequisites
- Python 3.10 or higher
- Bing Webmaster API key (get it from [Bing Webmaster Tools](https://www.bing.com/webmasters))

### Option 1: Install from npm
```bash
npm install -g @isiahw1/mcp-server-bing-webmaster
```

### Option 2: Install from source
```bash
git clone https://github.com/isiahw1/mcp-server-bing-webmaster.git
cd mcp-server-bing-webmaster
pip install -e .
```

## Configuration

### 1. Get your Bing Webmaster API Key

1. Sign in to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Go to Settings → API Access
3. Generate your API key

### 2. Set up environment

Create a `.env` file in your project directory:

```bash
BING_WEBMASTER_API_KEY=your_api_key_here
```

### 3. Configure Claude Desktop

Add to your Claude Desktop configuration (`~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "bing-webmaster": {
      "command": "mcp-server-bing-webmaster",
      "env": {
        "BING_WEBMASTER_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

For development/source installation:

```json
{
  "mcpServers": {
    "bing-webmaster": {
      "command": "/path/to/venv/bin/python",
      "args": ["-m", "mcp_server_bwt"],
      "env": {
        "BING_WEBMASTER_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## Available Tools (42 Total)

### Site Management
- `get_sites` - List all verified sites in your account
- `add_site` - Add a new site to Bing Webmaster Tools
- `verify_site` - Verify ownership of a site
- `remove_site` - Remove a site from your account
- `get_site_roles` - Get list of users with access to the site
- `add_site_roles` - Delegate site access to another user

### Traffic Analysis
- `get_query_stats` - Get search query performance data
- `get_page_stats` - Get page-level traffic statistics
- `get_rank_and_traffic_stats` - Get overall ranking and traffic data
- `get_query_page_stats` - Get detailed traffic statistics for a specific query
- `get_query_page_detail_stats` - Get statistics for specific query-page combinations
- `get_url_traffic_info` - Get traffic information for specific URLs

### Crawling & Indexing
- `get_crawl_stats` - View crawl statistics and bot activity
- `get_crawl_issues` - Get crawl errors and issues
- `get_crawl_settings` - Get crawl settings for a site
- `update_crawl_settings` - Update crawl settings (slow/normal/fast)
- `get_url_info` - Get detailed index information for a specific URL

### URL Management
- `submit_url` - Submit a single URL for indexing
- `submit_url_batch` - Submit multiple URLs at once
- `get_url_submission_quota` - Check your URL submission limits

### Content Submission
- `submit_content` - Submit page content directly without crawling
- `get_content_submission_quota` - Get content submission quota information

### Sitemaps & Feeds
- `submit_sitemap` - Submit a new sitemap
- `remove_sitemap` - Remove a sitemap
- `get_feeds` - Get all RSS/Atom feeds for a site

### Keyword Analysis
- `get_keyword_data` - Get detailed data for specific keywords
- `get_related_keywords` - Find related search terms
- `get_keyword_stats` - Get historical statistics for a specific keyword

### Link Analysis
- `get_link_counts` - Get inbound link statistics
- `get_url_links` - Get inbound links for specific site URL (requires link and page parameters)
- `add_connected_page` - Add a page that has a link to your website

### Content Blocking
- `get_blocked_urls` - View blocked URLs
- `add_blocked_url` - Block URLs from crawling
- `remove_blocked_url` - Unblock URLs

### Deep Link Management
- `get_deep_link_blocks` - Get list of blocked deep links
- `add_deep_link_block` - Block deep links for specific URL patterns
- `remove_deep_link_block` - Remove a deep link block

### URL Parameters
- `get_query_parameters` - Get URL normalization parameters (may require special permissions)
- `add_query_parameter` - Add URL normalization parameter
- `remove_query_parameter` - Remove a URL normalization parameter

### Geographic Settings
- `get_country_region_settings` - Get country/region targeting settings (may require special permissions)
- `add_country_region_settings` - Add country/region targeting settings
- `remove_country_region_settings` - Remove country/region targeting settings

### Page Preview Management
- `add_page_preview_block` - Add a page preview block to prevent rich snippets
- `get_active_page_preview_blocks` - Get list of active page preview blocks
- `remove_page_preview_block` - Remove a page preview block

### Site Migration
- `get_site_moves` - Get history of site moves/migrations
- `submit_site_move` - Submit a site move/migration notification

### Children URL Management
- `get_children_url_info` - Get information about child URLs under a parent URL
- `get_children_url_traffic_info` - Get traffic information for child URLs

## Usage Examples

Once configured, you can use these tools in Claude:

### Basic Examples
```
"Show me all my verified sites in Bing Webmaster Tools"
"What are the top search queries for example.com?"
"Submit https://example.com/new-page for indexing"
"Show me crawl errors for my site"
"What's my daily URL submission quota?"
```

### Advanced Examples
```
"Get detailed stats for the query 'best products' on my site"
"Submit this HTML content directly for https://example.com/page"
"Show me traffic info for my top 10 pages"
"Add user@example.com as an administrator for my site"
"Block all URLs matching /temp/* pattern"
"Get historical data for the keyword 'seo tools'"
"Configure crawl rate to slow for my site"
"Get keyword suggestions related to 'marketing'"
```

## Development

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/isiahw1/mcp-server-bing-webmaster.git
cd mcp-server-bing-webmaster

# Create virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install in development mode
pip install -e .
```

### Running Tests

```bash
# Set your API key
export BING_WEBMASTER_API_KEY=your_api_key_here

# Run the server
python -m mcp_server_bwt
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details.

## Support

For issues, questions, or contributions, please visit:
https://github.com/isiahw1/mcp-server-bing-webmaster
