const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.route");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Test
app.get("/", (req, res) => {
  res.send("Grocery Backend API running");
});

module.exports = app;
