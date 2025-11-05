window.addEventListener("load", () => {
  const msg = document.querySelector("#msg");

  // Helper function to set text for the message display
  function setText(text) {
    msg.innerHTML = text;
  }

  // Helper function to set CSS class for the message display
  function setClass(good) {
    msg.classList.remove(good ? "error" : "success");
    msg.classList.add(good ? "success" : "error");
  }

  // Helper function to clear CSS classes for the message display
  function clearClass() {
    msg.classList.remove("error", "success");
  }

  // Wait 10 seconds before trying to reconnect
  // Or sending a new message
  const DELAY = 10_000;

  function wsConnect() {
    // WS_URL is injected by the server when serving the HTML file
    const wsClient = new WebSocket(WS_URL);

    let messageTimeout;

    function sendMessage() {
      const data = Math.ceil(10 + ((Math.random() * 1000) % 89));
      wsClient.send(`pong:${data}`);

      setText(
        `Sent: <b>pong:${data}</b>.<br />Waiting for response for 20s...`
      );

      messageTimeout = setTimeout(() => {
        setText(`No response from server for 2s.<br />Reconnecting in 2s...`);
        setClass(false);

        messageTimeout = setTimeout(() => {
          setText(
            `Connection closed because of no response.<br />Reconnecting...`
          );

          setClass(false);

          wsClient.close();
        }, 2000);
      }, 2 * DELAY);
    }

    wsClient.onerror = (error) => {
      clearTimeout(messageTimeout);

      setText(`WebSocket error.<br />Reconnecting in 10s...`);
      setClass(false);

      console.error("WebSocket error:", error);
    };

    wsClient.onclose = () => {
      clearTimeout(messageTimeout);

      setText(`WebSocket connection closed.<br />Reconnecting in 10s...`);
      setClass(false);

      setTimeout(wsConnect, DELAY);
    };

    wsClient.onopen = () => {
      clearTimeout(messageTimeout);

      setText(
        "WebSocket connection opened.<br />Sending first message in 10s..."
      );
      setClass(true);

      setTimeout(sendMessage, DELAY);
    };

    wsClient.onmessage = (event) => {
      clearTimeout(messageTimeout);

      setText(`Received: <b>${event.data}</b>.<br />Next message in 10s...`);
      clearClass();

      setTimeout(sendMessage, DELAY);
    };
  }

  setTimeout(() => {
    try {
      wsConnect();
    } catch (error) {
      setText(
        `WebSocket connection failed: <br />${error.message} to<br />${wsUrl}`
      );
      setClass(false);

      console.error("WebSocket connection failed:", error);
    }
  }, DELAY);
});
