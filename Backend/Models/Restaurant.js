const mongoose = require("mongoose");

const restauarantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      enum: ["Point"],
    },
    dishes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dish",
    },
    restaurant_img: {
      type: String,
    },
    available: {
      type: Boolean,
      default: true,
    },
    open_time: {
      type: String,
    },
    close_time: {
      type: String,
    },
    coordinates: {
      type: [Number],
    
    },
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("restaurant", restauarantSchema);
module.exports = Restaurant;
