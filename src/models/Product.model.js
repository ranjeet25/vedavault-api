import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },

    basicInfo: {
      name: { type: String, required: true },
      shortDescription: String,
      description: String,
      category: String,
      subCategory: String,
      brand: String,
      productCode: String,
      tags: [String],
    },

    pricing: {
      mrp: Number,
      sellingPrice: { type: Number, required: true },
      currency: { type: String, default: "INR" },
      taxInclusive: { type: Boolean, default: true },
    },

    offers: {
      discountType: {
        type: String,
        enum: ["percentage", "flat"],
      },
      discountValue: Number,
      offerLabel: String,
      validTill: Date,
    },

    images: {
      main: String,
      gallery: [String],
      hover: String,
    },

    sareeDetails: {
      fabric: String,
      weave: String,
      work: String,
      length: String,
      blousePiece: Boolean,
      blouseFabric: String,
      color: String,
      occasion: [String],
      care: String,
      origin: String,
    },

    availability: {
      inStock: { type: Boolean, default: true },
      stockCount: Number,
      sku: String,
    },

    delivery: {
      codAvailable: { type: Boolean, default: false },
      estimatedDeliveryDays: String,
      returnPolicyDays: Number,
    },

    rewards: {
      superCoinsEarned: Number,
      superCoinsRedeemable: Boolean,
    },

    distributor: {
      commissionPercentage: Number,
      referralEligible: Boolean,
      referralBonusCoins: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
