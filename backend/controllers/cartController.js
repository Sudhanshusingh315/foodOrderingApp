const User = require("../models/userModel");
const mongoose = require("mongoose");

// adding to the cart
exports.addToCart = async (req, res) => {
  // i want to add to cart
  // i will update the user model, since it has the model anyway;
  try {
    const { userId, itemId } = req.body;
    const addedItem = await User.findByIdAndUpdate(
      { _id: userId },
      {
        $push: { cart: itemId },
      },
      { new: true }
    );
    res.status(201).json({
      success: true,
      msg: "Item added to the cart",
      addedItem,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};

// deleting the whole cart
exports.deleteWholeCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const deleteCart = await User.findByIdAndUpdate(
      { _id: userId },
      {
        cart: [],
      },
      { new: true }
    );
    res.status(201).json({
      success: true,
      msg: "Cart is Empty",
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};

// updating the cart
exports.updateCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    const findCart = await User.findById({ _id: userId }).lean();
    let modifiedCart = findCart.cart.map((item) => {
      return item.toString();
    });
    let indexOfItem = modifiedCart.indexOf(itemId);
    modifiedCart.splice(indexOfItem, 1);
    modifiedCart = modifiedCart.map((item) => {
      return new mongoose.Types.ObjectId(`${item}`);
    });

    // updating the cart
    const updateCart = await User.findByIdAndUpdate(
      { _id: userId },
      {
        cart: modifiedCart,
      },
      { new: true }
    );

    res.status(201).json({
      success: true,
      msg: "Updated Cart",
      updateCart,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};

exports.getCartItem = async (req, res) => {
  const { userId } = req.body;
  try {
    const getItem = await User.findById({ _id: userId }).populate("cart");
    res.status(201).json({
      success: true,
      msg: "All the items in the cart",
      getItem,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};
