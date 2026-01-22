import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.route.js";
import customerRoutes from "./routes/customer.routes.js";
import saleRoutes from "./routes/sale.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", express.json());

app.use("/products", productRoutes);
app.use("/customers", customerRoutes);
app.use("/sales", saleRoutes);
app.use("/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Grocery Manager API running");
});

export default app;
