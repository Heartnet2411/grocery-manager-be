import express from "express";
import cors from "cors";
import apiRoutes from "./routes/index.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Grocery Manager API running");
});

export default app;
