import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.route.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Grocery Manager API running");
});

export default app;
