import * as AdminOrderService from "../services/admin.order.service.js";

/**
 * Get all orders
 */
export const getAllOrders = async (req, res) => {
  try {
    const orders = await AdminOrderService.getAllOrders();

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get order by ID
 */
export const getOrderById = async (req, res) => {
  try {
    const order = await AdminOrderService.getOrderById(req.params.id);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
