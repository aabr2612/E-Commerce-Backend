import express from "express";
import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  userOrders,
  allOrders,
  updateStatus,
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";

const orderRouter = express.Router();

// Admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);
orderRouter.post("/stripe", authUser, placeOrderStripe);

// User features
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
