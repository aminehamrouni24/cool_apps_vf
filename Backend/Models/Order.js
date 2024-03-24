// Import necessary libraries and dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Order schema
const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      itemId: {
        type: Schema.Types.ObjectId,
        ref: "Dish",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  paymentId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the Order model
module.exports = Order = mongoose.model("Order", orderSchema);
