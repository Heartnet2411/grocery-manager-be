import { Router } from "express";
import * as controller from "../controllers/product.controller.js";

const router = Router();

router.post("/", controller.createProduct);
router.get("/", controller.getProducts);
router.patch("/:id/stock", controller.updateStock);
router.delete("/:id", controller.deleteProduct);

module.exports = router;
