const Restaurant = require("../Models/Restaurant");
const Dish = require("../Models/Dish");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const restaurantControllers = {
  register: async (req, res) => {
    try {
      const { name, email, password, address } = req.body;
      if (name == "" || email == "" || password == "" || address == "") {
        return res.status(401).json({ msg: "All fields are required !!" });
      }
      const restaurant_exists = await Restaurant.findOne({ email: email });
      if (restaurant_exists) {
        return res
          .status(402)
          .json({ msg: "restaurant already exists , Please login ..." });
      }
      const hash = await bcrypt.genSalt(10);
      const hash_password = await bcrypt.hash(password, hash);
      const newRestaurant = await Restaurant.create({
        name,
        email,
        password: hash_password,
        address,
      });
      return res
        .status(200)
        .json({ msg: "Welcome to Cool-Restaurant !!!", data: newRestaurant });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  // ********************************************************
  // *********************Login *****************************

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email == "" || password == "") {
        return res.status(401).json({ msg: "All fields are required !!" });
      }
      const restaurant = await Restaurant.findOne({ email: email });
      if (!restaurant) {
        return res
          .status(401)
          .json({ msg: "Restaurant not found , try to register" });
      }
      const compare = await bcrypt.compare(password, restaurant.password);
      if (!compare) {
        return res.status(401).json({ msg: "Wrong Credentials" });
      }
      const token = await jwt.sign(
        { id: restaurant._id },
        process.env.JWT_SECRET
      );
      return res.status(200).json({ msg: "Welcome back ", restaurant, token });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
      const { password, open_time, close_time, available, restaurant_img } =
        req.body;
      const updatedRestaurant = await Restaurant.findByIdAndUpdate(
        id,
        {
          password,
          open_time,
          close_time,
          available,
          restaurant_img: req.file.path,
        },
        { new: true }
      );
      return res
        .status(200)
        .json({ msg: "Restaurant updated successfully", updatedRestaurant });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  //   *************************************************************************
  // *********************creating the dishes*********************************
  create_dish: async (req, res) => {
    try {
      const { name, description, category, price } = req.body;
      // to do
      // searching for existing dish
      const dish = await Dish.create({
        name,
        description,
        dish_img: req.file.path,
        category,
        price,
      });
      return res
        .status(200)
        .json({ msg: "Dish created successfully", data: dish });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateDish: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, category, price } = req.body;
      const updated_dish = await Dish.findByIdAndUpdate(
        id,
        {
          name,
          description,
          category,
          price,
          dish_img: req.file.path,
        },
        { new: true }
      );
      return res
        .status(200)
        .json({ msg: "Dish updated successfully.", updated_dish });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  delete_dish: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted_dish = await Dish.findByIdAndDelete(id);
      return res.status(200).json({ msg: "Dish deleted successfully." });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = {
  restaurantControllers,
};
