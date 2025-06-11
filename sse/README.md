# Node.js Server-Sent Events (SSE) Example

This is a minimal example of using Server-Sent Events (SSE) with Node.js and Express.

## How it works

-   The server exposes an `/events` endpoint that streams real-time events to connected clients using the SSE protocol.
-   Each client receives a timestamp every 2 seconds.
-   Proper headers are set to keep the connection alive and compatible with SSE.

## Getting Started

1. **Install dependencies**

    ```sh
    npm install express
    ```

2. **Run the server**

    ```sh
    node app.js
    ```

3. **Connect to the SSE endpoint**
    - Open your browser or use `curl`:
        ```sh
        curl http://localhost:3000/events
        ```
    - You should see a stream of timestamps.

## Files

-   `app.js` — Main Express server with SSE endpoint
-   `package.json` — Project dependencies

## License

MIT
