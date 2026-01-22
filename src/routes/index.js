import { Router } from "express";

import productRoutes from "./product.route.js";
import customerRoutes from "./customer.routes.js";
import saleRoutes from "./sale.routes.js";
import paymentRoutes from "./payment.routes.js";

const router = Router();

router.use("/products", productRoutes);
router.use("/customers", customerRoutes);
router.use("/sales", saleRoutes);
router.use("/payments", paymentRoutes);

export default router;
