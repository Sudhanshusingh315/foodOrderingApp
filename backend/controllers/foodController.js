const Food = require("../models/foodModel");

// adding food item;
// @desc: adding food to the cart
// private
exports.addFood = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    if (!name || !description || !price || !image || !category) {
      throw new Error("Fill all fields");
    }
    const newItem = await Food.create({
      name,
      description,
      price,
      image,
      category,
    });
    if (newItem) {
      res.status(201).json({
        message: "Food Item Added",
      });
    }
  } catch (err) {
    res.json({
      [err.name]: err.message,
    });
  }
};

// getting food item;
// @desc: getting food to the cart
// public
exports.getFood = async (req, res) => {
  const foodList = await Food.find({});
  if (foodList) {
    res.status(201).json({
      foodList,
    });
  }
};

// removing food item;
// @desc: removing food
// private

exports.removeFood = async (req, res) => {
  try {
    let { id } = req.body;
    const removeItem = await Food.findByIdAndDelete({ _id: id });
    if (removeItem) {
      res.status(201).json({
        success: "true",
        message: "Food Item deleted",
      });
    }
  } catch (err) {
    res.status(401).json({
      [err.name]: err.message,
    });
  }
};
