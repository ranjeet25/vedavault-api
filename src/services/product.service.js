import mongoose from "mongoose";
import Product from "../models/Product.model.js";

/**
 * Create new product
 */
export const createProduct = async (data) => {
  const existing = await Product.findOne({ slug: data.slug });
  if (existing) {
    throw new Error("Product with same slug already exists");
  }

  const product = await Product.create(data);
  return product;
};

/**
 * Get all products
 */
export const getAllProducts = async (limit) => {
  return await Product.find()
    .sort({ createdAt: -1 })
    .limit(limit || 0);
};

/**
 * Get product by slug
 */
export const getProductBySlug = async (slug) => {
  const product = await Product.findOne({ slug });
  if (!product) throw new Error("Product not found");
  return product;
};

/**
 * Get product by id
 */
export const getProductById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid product ID");
  }

  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};


/**
 * Update product
 */
export const updateProduct = async (id, data) => {
  const updated = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!updated) throw new Error("Product not found");
  return updated;
};

/**
 * Delete product
 */
export const deleteProduct = async (id) => {
  const deleted = await Product.findByIdAndDelete(id);
  if (!deleted) throw new Error("Product not found");
  return deleted;
};
