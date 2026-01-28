import express from "express";
import productRoutes from "./product.routes.js";
import authRoutes from "./auth.routes.js";
import orderRoutes from "./order.routes.js";
import adminOrderRoutes from "./admin.order.routes.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/admin", adminOrderRoutes);

export default router;
