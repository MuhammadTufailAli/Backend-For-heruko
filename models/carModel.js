const mongoose = require("mongoose");
const CarSchema = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  Engine_Type: {
    type: String,
    require: true,
  },
  City: {
    type: String,
    require: true,
  },
  Capacity: {
    type: String,
    require: true,
  },
  Transmission: {
    type: String,
    require: true,
  },

  Color: {
    type: String,
    require: true,
  },

  Assembly: {
    type: String,
    require: true,
  },

  Body_Type: {
    type: String,
    require: true,
  },
  Mileage: {
    type: String,
    require: true,
  },
  Model_Year: {
    type: String,
    require: true,
  },
  Username: {
    type: String,
    require: true,
  },
  User_Contact: {
    type: Number,
    require: true,
  },
  Price: {
    type: String,
    require: true,
  },
  Features: {
    type: [String],
    require: true,
  },
});

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;
