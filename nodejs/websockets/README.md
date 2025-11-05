# Websockets | lttle.cloud

This is a simple WebSocket server sample project for [lttle.cloud](https://lttle.cloud).

It demonstrates how to deploy a WebSocket server using Node.js and Nginx on lttle.cloud's platform.

## Running locally

Run the following command to start the WebSocket server and a static file server using Nginx:

```bash
npm run dev
```

Then open your browser and navigate to `http://localhost:8000` (or the port your static file server is running on) to access the WebSocket client.

## Deploy

To deploy the project to lttle.cloud, run:

```bash
lttle deploy websockets.lttle.yaml
```

This will build two Docker images

1. One for the WebSocket server
2. One for the Nginx server to serve the static files that when accessed will connect to the WebSocket server.

After that you can access your WebSocket client & server at `https://websocket-server--samples--public--your-tenant.eu.lttle.host/` where `your-tenant` is your lttle.cloud tenant name.

You can check our deployment of this sample [https://websocket-server--samples--public--aifrim.eu.lttle.host/](https://websocket-server--samples--public--aifrim.eu.lttle.host/).
