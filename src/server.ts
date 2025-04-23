import express from "express";
import morgan from "morgan";
import cors from "cors";

import router from "./router";
import { protect } from "./modules/auth";
import { createNewUser, signInUser } from "./handlers/user";

const app = express();

// Middleware
// Log requests to the console
app.use(morgan("dev"));
// Parse incoming requests with JSON payloads
app.use(express.json());
// Parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));
// Enable CORS for all requests
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);

app.post("/sign-in", signInUser);

export default app;
