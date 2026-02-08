import OrderService from "../services/order.service.js";

/**
 * POST /api/orders
 */
export const placeOrder = async (req, res) => {
  try {
    //console.log("User placing order:", req.body);
    const order = await OrderService.createOrder(
      req.user.id,
      req.body
    );

    //console.log("Order created:",  req.body);

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to place order",
    });
  }
};

/**
 * GET /api/orders/my
 */
export const getMyOrders = async (req, res) => {
  try {
    const orders = await OrderService.getOrdersByUser(req.user.id);

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
};

/**
 * GET /api/orders/:id
 */
export const getOrderById = async (req, res) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    if (order.user._id.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch order",
    });
  }
};
