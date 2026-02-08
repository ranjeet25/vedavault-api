import express from "express";
import {
  placeOrder,
  getMyOrders,
  getOrderById,
} from "../controllers/order.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware(), placeOrder);
router.get("/my", authMiddleware(), getMyOrders);
router.get("/:id", authMiddleware(), getOrderById);

export default router;
