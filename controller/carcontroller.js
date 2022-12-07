const { response } = require("express");
const Car = require("../models/carModel");
const factory = require("./handlerFactory");

// exports.deletecar = factory.deleteOne(Car);
exports.updatecar = factory.updateOne(Car);

exports.deletecar = async (req, res) => {
  try {
    const doc = await Car.findByIdAndDelete(req.params.id);
    console.log("User id is ", req.params.id);
    console.log(doc);
    res.status(200).json({
      status: "success",

      data: doc,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.addcar = async (req, res) => {
  let car = new Car({
    Name: req.body.Name,
    Engine_Type: req.body.Engine_Type,
    Transmission: req.body.Transmission,
    Color: req.body.Color,
    Assembly: req.body.Assembly,
    Body_Type: req.body.Body_Type,
    Mileage: req.body.Mileage,
    Model_Year: req.body.Model_Year,
    City: req.body.City,
    Capacity: req.body.Capacity,
    Username: req.body.Username,
    User_Contact: req.body.User_Contact,
    Price: req.body.Price,
    Features: req.body.Features,
  });
  car = await car.save();
  if (!car) {
    return res.status(404).send("Car not uploaded");
  }
  res.send(car);
};

exports.getcar = factory.getAll(Car);
// exports.getcar = async (req, res, next) => {
//   const car = await Car.find();
//   if (!car) {
//     res.status(500).json(err);
//   }

//   res.send(car);
// };
