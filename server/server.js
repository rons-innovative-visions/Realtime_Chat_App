import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
    cors: {
        origin: "https://1bddkdwp-3000.asse.devtunnels.ms",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    socket.on("send_message", (msg) => {
        socket.broadcast.emit("recieve_message", msg);
    })

    socket.on("user_typing", (data) => {
        socket.broadcast.emit("user_typing", data)
    })

    socket.on("new_user", (data) => {
        socket.broadcast.emit("new_user", data.user)
    })
})

server.listen(3001, () => {
    console.log("Server is running on port 3001");
})