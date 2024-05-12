const User = require("../models/userModel");
const { generatingToken } = require("../utils/jwtToken");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (!userExists) {
      throw new Error("Email is not registered");
    }
    if(userExists && await userExists.matchPassword(password)){

        const data = { email, id: userExists._id };
        const token = await generatingToken(data);
        res.status(201).json({
          success: true,
          message: "logged in",
          accessToken: token,
        });
    }else{
        throw new Error("Email or Password invalid")
    }
  } catch (err) {
    res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("email already registered");
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    // user created now send the token
    const data = { name, email, id: newUser._id };
    const token = await generatingToken(data);
    res.status(201).json({
      success: true,
      msg: "user created successfully",
      accessToken: token,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      msg: err.message,
    });
  }
};
