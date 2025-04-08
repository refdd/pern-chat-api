import express, { Request, Response } from "express";
import { app, server } from './socket/socket.js'
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
dotenv.config()
app.use(express.json()) // for parsing application json
app.use(cookieParser()) // for parsing cookies
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "api is working" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

export default app;