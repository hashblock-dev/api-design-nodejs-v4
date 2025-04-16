import express from "express";
import morgan from "morgan";
import router from "./router";

const app = express();

// Middleware
// Log requests to the console
app.use(morgan("dev"));
// Parse incoming requests with JSON payloads
app.use(express.json());
// Parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.use("/api", router);

export default app;
