const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const { EventEmitter } = require("node:events");

const app = express();
const server = createServer(app);
const io = new Server(server);

let count = 0;

// Create an event emitter for count changes
const countEmitter = new EventEmitter();

app.get("/", (req, res) => {
	res.sendFile(join(__dirname, "index.html"));
});
// Increment count every second and emit an event
setInterval(() => {
	count++;
	console.log("countUpdated", count);
	countEmitter.emit("countUpdated", count);
}, 1000);

io.on("connection", (socket) => {
	console.log("A user connected");

	socket.on("start_listening", () => {
		console.log("Client started listening");

		// Send initial count
		socket.emit("count_update", count);

		// Set up listener for count updates
		const updateListener = (newCount) => {
			socket.emit("count_update", newCount);
		};

		// Attach the listener to the countEmitter
		countEmitter.on("countUpdated", updateListener);

		socket.on("disconnect", () => {
			console.log("User disconnected");
			// Remove the listener when the client disconnects
			countEmitter.off("countUpdated", updateListener);
		});
	});
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
