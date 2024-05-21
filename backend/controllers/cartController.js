const User = require("../models/userModel");
const mongoose = require("mongoose");

// adding to the cart : done
exports.addToCart = async (req, res) => {
  // add to cart
  // i will update the user model, since it has the model anyway;
  try {
    const { userId, itemId } = req.body;
    const updateingCart = await User.findById({ _id: userId });
    let index = updateingCart.cart.findIndex((item) => {
      return item.foodId.toString() === itemId;
    });
    if (index === -1) {
      updateingCart.cart.push({
        foodId: itemId,
        quantity: 1,
      });
    } else {
      updateingCart.cart[index].quantity += 1;
    }
    await updateingCart.save();
    res.status(200).json({
      success: true,
      msg: "Item added to the cart",
    });
    console.log(index);
  } catch (err) {
    res.json({
      success: false,
      msg: err.message,
    });
  }
};

// deleting the whole cart : test this api
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

// will remove the item from the cart, regardless of the quantities
exports.deleteParticularItem = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    const updateCart = await User.findById({ _id: userId });
    let index = updateCart.cart.findIndex((p) => {
      return (p.foodId.toString()) === itemId;
    });
    if (index === -1) {
      res.json("Item is not present in the cart");
    } else {
      // this will remove the particular item from the cart, regardless of it's quantity
      updateCart.cart.splice(index, 1);
    }
    await updateCart.save();
    res.status(200).json({
      success: true,
      msg: "Item is removed from the cart",
      deletedId: itemId,
    });
  } catch (err) {
    res.status(401).json({
      success: true,
      msg: "Item deleted from the cart",
    });
  }
};

// updating the cart but not deleting the whole item
exports.updateCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    // find the user
    const updateCart = await User.findById({ _id: userId });
    // get the cart and this only for deleting the specifc cart
    let index = updateCart.cart.findIndex((p) => {
      return p.foodId.toString() === itemId;
    });
    if (index === -1) {
      res.json({
        success: false,
        msg: "Item is already removed from the cart",
      });
    }
    // since you are removing the items, means it already exists and you should just decrese the quantity
    // if (updateCart.cart[index].quantity === 1) {
    //   // this removes the item from the cart itself
    //   updateCart.cart.splice(index, 1);
    // }
    // else {
    updateCart.cart[index].quantity -= 1;
    // }
    await updateCart.save();
    res.json({
      success: true,
      msg: "Item removed from the cart",
      deletedId: itemId,
    });
    // if the quantity in less than 1 or 0, pop out that specific item
  } catch (err) {
    res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};

// get cart : done
exports.getCartItem = async (req, res) => {
  const { userId } = req.body;
  try {
    const getItem = await User.findById({ _id: userId }).populate({
      path: "cart",
      populate: {
        path: "foodId",
      },
    });
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
