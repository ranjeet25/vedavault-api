import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductBySlug,
  getProductById
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);           // Admin
router.get("/", getAllProducts);           // Public
//router.get("/:slug", getProductBySlug);    // Public
router.get("/:id", getProductById);    // Public

export default router;
