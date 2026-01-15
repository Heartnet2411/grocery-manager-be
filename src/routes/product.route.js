import express from "express";
import { getProducts } from "../controllers/product.controller.js";

const router = express.Router();

// GET /api/products
router.get("/", getProducts);

export default router;
