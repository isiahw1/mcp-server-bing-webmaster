FROM python:3.13-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js for mcp-proxy
RUN curl -fsSL https://deb.nodesource.com/setup_24.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Clone and install mcp-proxy from GitHub
RUN git clone https://github.com/punkpeye/mcp-proxy.git && \
    cd mcp-proxy && \
    npm install

# Clone and install the MCP server
RUN git clone https://github.com/isiahw1/mcp-server-bing-webmaster.git server && \
    cd server && \
    pip install -e .

# Build mcp-proxy
RUN cd /app/mcp-proxy && npm run build

# Create startup script
RUN echo '#!/bin/bash\n\
export BING_WEBMASTER_API_KEY="${BING_WEBMASTER_API_KEY:-placeholder}"\n\
cd /app/server\n\
exec node /app/mcp-proxy/dist/bin/mcp-proxy.js --port 3000 --debug -- python -m mcp_server_bwt' > /app/start.sh && \
    chmod +x /app/start.sh

# Expose the port
EXPOSE 3000

# Run the server with mcp-proxy
CMD ["/app/start.sh"]