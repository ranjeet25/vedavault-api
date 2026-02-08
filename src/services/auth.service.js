import User from "../models/User.model.js";
import Distributor from "../models/Distributor.model.js";
import Customer from "../models/Customer.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerDistributor = async (data) => {
  const exists = await User.findOne({ mobile: data.mobile });
  if (exists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    mobile: data.mobile,
    password: hashedPassword,
    role: "DISTRIBUTOR",
  });

  const distributor = await Distributor.create({
    userId: user._id,
    ...data,
  });

  return { user, distributor };
};

export const registerCustomer = async (data) => {
  const exists = await User.findOne({ mobile: data.mobile });
  if (exists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    mobile: data.mobile,
    password: hashedPassword,
    role: "CUSTOMER",
  });

  const customer = await Customer.create({
    userId: user._id,
    ...data,
  });

  return { user, customer };
};

export const login = async (mobile, password) => {
  const user = await User.findOne({ mobile }).select("+password");
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return {
    token,
    user: { id: user._id, role: user.role },
  };
};
