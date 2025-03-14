const express = require("express");
const { Queue } = require("bullmq");
const Redis = require("ioredis");

const app = express();
const port = 3000;
const redisConnection = new Redis({ host: "redis", port: 6379, maxRetriesPerRequest: null });
const taskQueue = new Queue("task-queue", { connection: redisConnection });

app.use(express.json());

app.post("/process-file", async (req, res) => {
	const { fileName } = req.body;

	if (!fileName) {
		return res.status(400).send("fileName is required");
	}

	await taskQueue.add("process-file-task", { fileName });

	res.status(202).send("Task accepted. Processing in background.");
});

app.listen(port, () => {
	console.log(`API Server listening on port ${port}`);
});
