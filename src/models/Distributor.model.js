import mongoose from "mongoose";

const distributorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    aadhaar: {
      type: String,
      required: true,
      unique: true,
    },
    pan: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    bankDetails: {
      bankName: String,
      accountHolder: String,
      accountNumber: String,
      ifsc: String,
      branch: String,
    },
    address: {
      type: String,
      required: true,
    },
    referralCode: String,
  },
  { timestamps: true }
);

const Distributor = mongoose.model("Distributor", distributorSchema);
export default Distributor;
