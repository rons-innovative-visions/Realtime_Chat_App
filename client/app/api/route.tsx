'use server'
import { createServer } from "http"
import { Server, type Socket } from "socket.io"
import { parse } from "url"

export async function GET(request: Request) {
   const httpServer =  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
 
})
  const io = new Server(httpServer,{  cors: {
    origin: "https://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  },allowEIO3:true})
  

    io.on("connection",(socket:Socket) => {
    socket.on("send_message", (msg: any) => {
      console.log(`> Ready on http://`);
        socket.broadcast.emit("recieve_message", msg);
        
    })

    socket.on("user_typing", (data: any) => {
      console.log(`> Ready on http://`);
        socket.broadcast.emit("user_typing", data)
    })

    socket.on("new_user", (data: { user: any; }) => {
      console.log(`> Ready on http://`);
        socket.broadcast.emit("new_user", data.user)
    })
  })
return new Response('Hello, Next.js!', {
  status: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
})
}


export async function POST(request: Request) {
  try {
    const text = await request.text()
    

    // Process the webhook payload
  } catch (error:any) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }
 
  return new Response('Success!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
