const express = require("express");
const app = express();

app.get("/events", (req, res) => {
	// 1. Set SSE-specific headers
	res.setHeader("Content-Type", "text/event-stream");
	res.setHeader("Cache-Control", "no-cache");
	res.setHeader("Connection", "keep-alive");

	// 2. Send an initial comment to establish the stream
	res.write(": connected\n\n"); // ignored by client but keeps it alive
	console.log("SSE connection established with client.");

	// 3. Periodically send events
	const intervalId = setInterval(() => {
		const msg = `data: ${new Date().toISOString()}\n\n`;
		res.write(msg); // flushes data to client
		console.log("Sent event to client:", msg.trim());
	}, 2000);

	// 4. Handle client disconnects
	req.on("close", () => {
		clearInterval(intervalId);
		res.end();
		console.log("SSE connection closed by client.");
	});
});

app.listen(3000, () => {
	console.log("SSE server running on http://localhost:3000/events");
});
