import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import {
  getAllOrders,
  getOrderById,
} from "../controllers/admin.order.controller.js";

const router = express.Router();

/**
 * ADMIN only routes

router.get(
  "/orders",
  authMiddleware([]),
  getAllOrders
);

router.get(
  "/orders/:id",
  authMiddleware([]),
  getOrderById
);
 */

router.get(
  "/orders",
  getAllOrders
);

router.get(
  "/orders/:id",
  getOrderById
);

export default router;
