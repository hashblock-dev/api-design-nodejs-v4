import dotenv from "dotenv";
import app from "./server";

dotenv.config();

const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
