import Order from "../models/order.model.js";

/**
 * Get all orders (Admin)
 */
export const getAllOrders = async () => {
  return await Order.find()
    .populate("user", "name mobile role")
    .sort({ createdAt: -1 });
};

/**
 * Get order by ID (Admin)
 */
export const getOrderById = async (orderId) => {
  const order = await Order.findById(orderId).populate(
    "user",
    "name mobile role"
  );

  if (!order) {
    throw new Error("Order not found");
  }

  return order;
};
