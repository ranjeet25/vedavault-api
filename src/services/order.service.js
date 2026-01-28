import Order from "../models/order.model.js";

class OrderService {
  static async createOrder(userId, payload) {
    const { items, customer, payment, totalAmount } = payload;

    if (!items || items.length === 0) {
      throw new Error("Order items are required");
    }

    if (!customer?.name || !customer?.phone || !customer?.address) {
      throw new Error("Customer details are incomplete");
    }

    const order = await Order.create({
      user: userId,
      items,
      customer,
      payment: {
        mode: payment.mode,
        transactionId: payment.transactionId || null,
        status: payment.mode === "UPI" ? "PAID" : "PENDING",
      },
      totalAmount,
    });

    return order;
  }

  static async getOrdersByUser(userId) {
    return Order.find({ user: userId }).sort({ createdAt: -1 });
  }

  static async getOrderById(orderId) {
    return Order.findById(orderId).populate("user", "name mobile");
  }
}

export default OrderService;
