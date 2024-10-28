import { createServer } from "node:http";
import next from "next";
import { Server, Socket } from "socket.io";
import { parse } from "url";
const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3001;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev });
const handler = app.getRequestHandler();
console.log(
  "when using middleware `hostname` and `port` must be provided below"
  ,
);
app.prepare().then(() => {
  const httpServer =  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handler(req, res, parsedUrl);
 
})
  const io = new Server(httpServer,{  cors: {
    origin: "https://localhost:3000"
  }
  }
  )
  

    io.on("connection",(socket:Socket) => {
    socket.on("send_message", (msg: any) => {
      console.log(`> Ready on http://${hostname}:${port}`);
        socket.broadcast.emit("recieve_message", msg);
        
    })

    socket.on("user_typing", (data: any) => {
      console.log(`> Ready on http://${hostname}:${port}`);
        socket.broadcast.emit("user_typing", data)
    })

    socket.on("new_user", (data: { user: any; }) => {
      console.log(`> Ready on http://${hostname}:${port}`);
        socket.broadcast.emit("new_user", data.user)
    })
  })
  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`,
  );
})
