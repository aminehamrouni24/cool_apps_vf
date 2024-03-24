const jwt = require("jsonwebtoken");
const Restaurant = require("../Models/Restaurant");
require("dotenv").config(); // Make sure to replace with your own secret key

const authRestaurant = async (req, res, next) => {
  // Get token from the request headers
  const token = req.headers.authorization.split("Bearer ")[1];
  if (!token)
    return res.status(400).json({ message: "Please login to continue" });

  const restaurant = jwt.verify(token, process.env.JWT_SECRET);
  if (!restaurant)
    return res.status(400).json({ message: "Invalid Authentication." });

  next();
};

module.exports = authRestaurant;
