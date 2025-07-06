FROM debian:bookworm

ENV DEBIAN_FRONTEND=noninteractive \
    GLAMA_VERSION="1.0.0"

RUN (apt-get update) && (apt-get install -y --no-install-recommends build-essential curl wget software-properties-common libssl-dev zlib1g-dev git) && (rm -rf /var/lib/apt/lists/*) && (curl -fsSL https://deb.nodesource.com/setup_24.x | bash -) && (apt-get install -y nodejs) && (apt-get clean) && (npm install -g mcp-proxy@^5.3) && (npm install -g pnpm@10.12.1) && (node --version) && (curl -LsSf https://astral.sh/uv/install.sh | UV_INSTALL_DIR="/usr/local/bin" sh) && (uv python install 3.13 --default --preview) && (ln -s $(uv python find) /usr/local/bin/python) && (python --version) && (apt-get clean) && (rm -rf /var/lib/apt/lists/*) && (rm -rf /tmp/*) && (rm -rf /var/tmp/*) && (uv python install 3.13 --default --preview && python --version)

WORKDIR /app

RUN git clone https://github.com/isiahw1/mcp-server-bing-webmaster . && git checkout 869622b01d95a2b65f9e717298a779f10a2c4ed2

RUN (npm run build)

CMD ["mcp-proxy"]
