const express = require("express");
const router = express.Router();
const logger = require("../utils/logger");
const elasticClient = require("../config/elasticConfig");

// Log entry endpoint
router.post("/", async (req, res) => {
	console.log("log route start")
	const { level, message, metadata } = req.body;

	if (!level || !message) {
		return res.status(400).json({ error: "Level and message are required" });
	}

	const logEntry = {
		level,
		message,
		metadata: metadata || {},
		timestamp: new Date(),
	};


	console.log("adding to winston logger")
	logger.log(level, message, { metadata });

	// Send log to Elasticsearch
	try {
		console.log("adding to elastic logger")
		await elasticClient.index({
			index: "logs",
			body: logEntry,
		});
		res.status(201).json({ success: true, log: logEntry });
	} catch (error) {
		console.error("Elasticsearch Error:", error);
		res.status(500).json({ error: "Failed to save log" });
	}
});

module.exports = router;
