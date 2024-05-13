const Menu = require("../models/menuModel");

exports.addItem = async (req, res) => {
  const { category, image } = req.body;
  try {
    const itemExists = await Menu.findOne({ category });
    if (itemExists) {
      throw new Error("Category already exits");
    }
    const newMenu = await Menu.create({
      category,
      image,
    });
    if (newMenu) {
      res.json({
        success: true,
        msg: "Category Added",
      });
    }
  } catch (err) {
    res.json({
      success: false,
      msg: err.message,
    });
  }
};


