const jwt = require("jsonwebtoken");
const User = require("../Models/User");
require("dotenv").config(); // Make sure to replace with your own secret key

const authMiddleware = async (req, res, next) => {
  // Get token from the request headers
  const token = req.headers.authorization.split("Bearer ")[1];
  if (!token)
    return res.status(400).json({ message: "Please login to continue" });

  const user = jwt.verify(token, process.env.JWT_SECRET);
  if (!user)
    return res.status(400).json({ message: "Invalid Authentication." });

  const checkAdmin = await User.findOne({ _id: user._id });
  if (checkAdmin.role != "admin") {
    return res.status(400).json({ message: "You are not authorized" });
  }
  next();
};

module.exports = authMiddleware;
