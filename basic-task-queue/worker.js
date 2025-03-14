const { Worker } = require("bullmq");
const Redis = require("ioredis");

const redisConnection = new Redis({ host: "redis", port: 6379, maxRetriesPerRequest: null });

const taskWorker = new Worker(
	"task-queue",
	async (job) => {
		console.log(`Processing file: ${job.data.fileName}`);
		await new Promise((resolve) => setTimeout(resolve, 5000));
		console.log(`File processed: ${job.data.fileName}`);
	},
	{ connection: redisConnection }
);
