# **Counter with WebSockets and Socket.io**

This project demonstrates **real-time communication** using **WebSockets** in two different ways:

1. **Pure WebSocket Server** (Works with Postman or WebSocket clients)
2. **Socket.io Server** (Works with a browser-based HTML page)

---

## **🚀 Features**

✅ **Real-time Counter Updates**: The server increments a counter every second and sends updates to connected clients.  
✅ **Two Implementations**:

- **Pure WebSockets** (uses `ws` module, works with Postman)
- **Socket.io** (works with browsers via an HTML page)

✅ **Handles Multiple Clients**: Any number of clients can connect and receive updates.  
✅ **Automatically Removes Disconnected Clients**

---

## **🛠 Setup & Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/counter-websocket.git
   cd counter-websocket
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

---

## **1️⃣ Running the Pure WebSocket Server**

This version uses the **ws** module and works with tools like **Postman** or **WebSocket clients**.

### **🔹 Start the Server**

```bash
node ws-server.js
```

It will run on:  
**`ws://localhost:3000`**

### **🔹 How to Test (Using Postman)**

1. Open **Postman** → **New WebSocket Request**
2. Connect to: **`ws://localhost:3000`**
3. Send message:
   ```text
   start_listening
   ```
4. You'll start receiving **real-time counter updates**.

---

## **2️⃣ Running the Socket.io Server**

This version works with a browser and **uses Express + Socket.io**.

### **🔹 Start the Server**

```bash
node socketio-server.js
```

It will run on:  
**`http://localhost:3000`**

### **🔹 Open the Web UI**

1. Open your browser and go to:  
   **`http://localhost:3000`**
2. The counter will update in **real time**.

---

## **📜 File Structure**

```
/counter-websocket
│── ws-server.js         # Pure WebSocket implementation
│── socketio-server.js   # Socket.io implementation
│── index.html           # Frontend for Socket.io
│── package.json         # Dependencies
│── README.md
```

---

## **📌 Key Differences**

| Feature           | Pure WebSockets (`ws`)  | Socket.io                               |
| ----------------- | ----------------------- | --------------------------------------- |
| Protocol          | WebSocket (`ws://`)     | WebSocket over HTTP (`ws://`, `wss://`) |
| Works with        | Postman, custom clients | Browsers, custom clients                |
| Requires Express? | ❌ No                   | ✅ Yes                                  |
| Ease of Use       | Manual message handling | Built-in event handling                 |

---

## **🌟 Conclusion**

- Use **WebSockets (`ws`)** if you need a **lightweight, custom** solution (e.g., Postman testing, microservices).
- Use **Socket.io** for **browser-based** applications with built-in features.

---

## 📜 License

This project is licensed under the **MIT License**.

---

Feel free to **fork & contribute!** 🚀
