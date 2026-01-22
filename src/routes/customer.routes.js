import { Router } from "express";
import * as controller from "../controllers/customer.controller.js";

const router = Router();

router.post("/", controller.createCustomer);
router.get("/", controller.getCustomers);

export default router;
