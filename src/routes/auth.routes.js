import express from "express";
import {
  registerDistributor,
  registerCustomer,
  login,
} from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * Registration
 */
router.post("/register/distributor", registerDistributor);
router.post("/register/customer", registerCustomer);

/**
 * Login
 */
router.post("/login", login);

export default router;
