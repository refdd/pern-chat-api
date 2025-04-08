import express, { Request, Response } from "express";
import { app, server } from './socket/socket.js'; // Already creates and exports the server
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is working" });
});

// ✅ Don't use app.listen here — use server.listen instead
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
