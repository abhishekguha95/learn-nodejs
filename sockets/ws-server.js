const { EventEmitter } = require("node:events");
const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 3000 });
console.log("WebSocket server running on ws://localhost:3000");

let count = 0;

// Create an event emitter for count changes
const countEmitter = new EventEmitter();

// Increment count every second and emit an event
setInterval(() => {
    count++;
    console.log("countUpdated", count);
    countEmitter.emit("countUpdated", count);
}, 1000);

wss.on("connection", (socket) => {
    console.log("A user connected");

    // Define the update listener
    const updateListener = (newCount) => {
        if (socket.readyState === socket.OPEN) {
            socket.send(JSON.stringify({ event: "count_update", data: newCount }));
        }
    };

    socket.on("message", (message) => {
        const msg = message.toString().trim();
        console.log("Received:", msg);

        if (msg === "start_listening") {
            console.log("Client started listening");

            // Send initial count
            socket.send(JSON.stringify({ event: "count_update", data: count }));

            // Attach the listener to the countEmitter
            countEmitter.on("countUpdated", updateListener);
        }
    });

    socket.on("close", () => {
        console.log("User disconnected");
        // Remove the listener when the client disconnects
        countEmitter.off("countUpdated", updateListener);
    });
});
