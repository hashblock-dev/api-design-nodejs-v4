import express from "express";
import morgan from "morgan";
import cors from "cors";

import router from "./router";
import { checkAuthentication } from "./middlewares/auth";
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

app.get("/", (req, res, next) => {
  setTimeout(() => {
    next(new Error("This is a test error"));
  }, 1);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Server is running", // Add a message to the response
  });
});

app.use("/api", checkAuthentication, router);

app.post("/user", createNewUser);

app.post("/sign-in", signInUser);

// Error handling middleware for synchronous errors and async errors with next()
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message, // Send the error message in the response
  });
});

export default app;
