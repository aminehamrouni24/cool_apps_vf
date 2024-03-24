const router = require("express").Router();
const userControllers = require("../Controllers/userControllers");

router.get("/allrestaurants", userControllers.getRestaurants);
router.get("/restaurant/:id", userControllers.getRestaurant);
router.get("/dishes", userControllers.getDishes);
router.get("/dishe/:id", userControllers.getDish);

module.exports = router;
