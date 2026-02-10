# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-02-09

### Security
- Fix API key exposure in URL query strings — now passed via httpx `params` dict
- Fix URL injection / parameter pollution across all 60 tools
- Fix API key override via caller-supplied params (defense-in-depth)
- Remove self-referential npm dependency (supply chain risk)

### Fixed
- Concurrency race condition on shared HTTP client — replaced with lazy persistent client
- No connection pooling — persistent client with httpx.Limits and granular timeouts
- API key validation deferred from import-time to app() startup
- Version desync between package.json and version.py
- False "Python installed automatically via npm" claim in README
- Inaccurate tool count in CLAUDE.md (was "70+", actual is 60)
- Dev setup instructions now use uv instead of pip/venv

### Removed
- Unused datetime import
- Dead close() method on BingWebmasterAPI

## [1.0.1] - 2025-01-06

### Changed
- Add CLAUDE.md with comprehensive development guide
- Correct FastMCP initialization parameters

## [1.0.0] - 2025-01-06

### Added
- Initial release with Bing Webmaster Tools integration
- Support for site management and analytics features
- Full MCP (Model Context Protocol) specification compliance
- Comprehensive error handling and logging
- Complete documentation and examples

### Features
- Site Management
- Traffic Analysis
- Crawling & Indexing
- URL Submission
- Content Management
- Sitemap Management
- Keyword Analysis
- Link Analysis
- Settings Configuration
