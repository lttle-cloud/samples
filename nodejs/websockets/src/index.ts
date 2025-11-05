import { randomUUID } from "node:crypto";
import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { Transform } from "node:stream";
import { WebSocketServer } from "ws";

if (process.env.WS_URL) {
  console.log(
    "[Server]",
    `Using WebSocket URL from environment: ${process.env.WS_URL}`
  );
} else {
  console.log(
    "[Server]",
    "No WS_URL environment variable set, using default WebSocket server."
  );
}

const ws = new WebSocketServer({ noServer: true });

ws.on("connection", (socket) => {
  const id = randomUUID();

  console.log(`[${id}]`, "Client connected");

  socket.on("message", (message) => {
    console.log(`[${id}]`, `Received: ${message}`);

    console.log(`[${id}]`, `Sending: server.ping.${message}`);
    socket.send(`server.ping.${message}`);
  });

  socket.on("close", () => {
    console.log(`[${id}]`, "Client disconnected");
  });

  socket.on("error", (error) => {
    console.error(`[${id}]`, `WebSocket error: ${error}`);
  });
});

const http = createServer(async (req, res) => {
  const file = req.url === "/" ? "/index.html" : req.url || "";

  if (existsSync(`./public${file}`) === false) {
    console.error("[Server]", `File not found: ./public${file}`);

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    return;
  }

  const fd = createReadStream(`./public${file}`, { encoding: "utf8" });

  const contentType = file.endsWith(".html")
    ? "text/html"
    : file.endsWith(".css")
    ? "text/css"
    : file.endsWith(".js")
    ? "application/javascript"
    : file.endsWith(".svg")
    ? "image/svg+xml"
    : "application/octet-stream";

  res.writeHead(200, { "Content-Type": contentType });

  if (file.endsWith(".html")) {
    console.log("[Server]", `Serving and transforming file: ./public${file}`);

    const transform = new Transform({
      transform(chunk, _encoding, callback) {
        const modifiedChunk = chunk
          .toString()
          .replace(
            process.env.WS_URL ? "wss://__WS_URL__" : "ws://__WS_URL__",
            process.env.WS_URL
              ? `wss://${process.env.WS_URL}`
              : `ws://localhost:8000`
          );
        callback(null, modifiedChunk);
      },
    });

    fd.pipe(transform).pipe(res);
  } else {
    console.log("[Server]", `Serving file: ./public${file}`);
    fd.pipe(res);
  }
});

http.on("upgrade", (request, socket, head) => {
  ws.handleUpgrade(request, socket, head, (websocket) => {
    console.log("[Server]", "Upgrading to WebSocket connection");
    ws.emit("connection", websocket, request);
  });
});

http.listen(8000, () => {
  console.log("[Server]", "HTTP server is running on http://localhost:8000");
});
