# Task Queue with BullMQ, Redis & Docker

This is a simple **task queue system** using **Node.js, Express, BullMQ, Redis, and Docker**. It processes tasks in the background using a separate worker process.

## 🚀 Features

- **Task queue using BullMQ**
- **Redis for job management**
- **Background processing with a worker**
- **Dockerized setup** for easy deployment

## 📦 Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/abhishekguha95/learn-nodejs.git
cd basic-task-queue
```

### 2️⃣ Start Services with Docker Compose

```sh
docker-compose up --build
```

This will:

- Start the API server on `http://localhost:3000`
- Start the worker process
- Run Redis as a background service

## 📡 API Endpoints

### ➤ **Submit a Task**

```sh
curl -X POST http://localhost:3000/process-file \
-H "Content-Type: application/json" \
-d '{"fileName": "example.txt"}'
```

**Response:**

```json
{"message": "Task accepted. Processing in background."}
```

## 🛠 Development & Debugging

- **Stop Services:** `docker-compose down`
- **Check Logs:** `docker-compose logs -f api` or `docker-compose logs -f worker`

## 🏗 Future Enhancements

- ✅ Add priority queues & retries
- ✅ Implement task status tracking
- ✅ Use WebSockets for real-time updates

## 📜 License

This project is licensed under the **MIT License**.

---

Feel free to **fork & contribute!** 🚀

