import { Router } from "express";
import * as controller from "../controllers/payment.controller.js";
const router = Router();

router.post("/", controller.payDebt);

module.exports = router;
