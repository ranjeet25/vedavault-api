import * as authService from "../services/auth.service.js";

export const registerDistributor = async (req, res, next) => {
  try {
    const data = await authService.registerDistributor(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const registerCustomer = async (req, res, next) => {
  try {
    const data = await authService.registerCustomer(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { mobile, password } = req.body;
    const data = await authService.login(mobile, password);
    res.json({ success: true, ...data });
  } catch (err) {
    next(err);
  }
};
