const User = require("../Models/User");
const Dish = require("../Models/Dish");
const Restaurant = require("../Models/Restaurant");

const userControllers = {
  // public route
  getRestaurants: async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      return res
        .status(200)
        .json({ msg: "all restaurants", data: restaurants });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  },
  //   public route
  getDishes: async (req, res) => {
    try {
      const dishes = await Dish.find();
      return res.status(200).json({ msg: "all dishes", data: dishes });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  },
  //   public route
  getRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
      const restaurant = await Restaurant.findById(id);
      return res.status(200).json({ data: restaurant });
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  },
  //   public route
  getDish: async (req, res) => {
    try {
      const { id } = req.params;
      const dish = await Dish.findById(id);
      return res.status(200).json({ data: dish });
    } catch (error) {
      return res.status(500).json({ msg: message.error });
    }
  },
};

module.exports = userControllers;
