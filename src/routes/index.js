import express from "express";
import productRoutes from "./product.routes.js";
import authRoutes from "./auth.routes.js";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);

export default router;
