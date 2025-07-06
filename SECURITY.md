# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please send an email to github@isiahwheeler.com. All security vulnerabilities will be promptly addressed.

Please include the following information:
- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

## Security Best Practices

When using this MCP server:

1. **API Key Security**
   - Never commit your API key to version control
   - Use environment variables or secure secret management
   - Rotate your API keys regularly

2. **Access Control**
   - Limit API key permissions to only what's necessary
   - Use site-specific roles when possible

3. **Data Privacy**
   - Be cautious when sharing search analytics data
   - Review data before exporting or sharing

## Response Timeline

- **Initial Response**: Within 48 hours
- **Assessment**: Within 1 week
- **Resolution**: Varies based on severity

Thank you for helping keep this project secure!
