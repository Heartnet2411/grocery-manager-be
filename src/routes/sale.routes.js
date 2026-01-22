import { Router } from "express";
import * as controller from "../controllers/sale.controller.js";

const router = Router();

router.post("/", controller.createSale);
router.get("/", controller.getSales);
router.get("/debts", controller.getDebts);

export default router;
