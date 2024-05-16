const mongoose = require("mongoose");
const { Schema } = mongoose;

// User schema

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" ,default:[]}],
});

userSchema.methods.matchPassword = async function (usePassword) {
  if (usePassword === this.password) return true;
  else return false;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
