var express = require("express");
var router = express.Router();

const carcontroller = require("../controller/carcontroller");

router.route("/addcar").post(carcontroller.addcar);

router.route("/getcar").get(carcontroller.getcar);
router.route("/deleteCar/:id").get(carcontroller.deletecar);
router.route("/updateCar/:id").get(carcontroller.updatecar);

module.exports = router;
