require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const cors = require("cors");
const userRotuer = require("./routes/userRoutes");
const foodRouter = require("./routes/foodRoutes");
const menuRouter = require("./routes/menuRoutes");
const cartRouter = require("./routes/cartRoutes");
const paymetnRouter = require("./routes/paymentRoutes");
const port = process.env.PORT;
const app = express();

// Middlesware
app.use(express.json());
app.use(cors());

// Razorpay
exports.instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZOR_PAY_SECRETE,
});

// Connecting to mongoose

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://LeaderOfMeow:qwezxc!!%40!@cluster0.mskwazt.mongodb.net/FoodOrderApp"
  );
  console.log("mongoosed connected");
}

// All routes

// user routes
app.use("/api/user", userRotuer.routes);

// food routes
app.use("/api/food", foodRouter.routes);

// menu routes
app.use("/api/menu", menuRouter.routes);

// cart routes
app.use("/api/cart", cartRouter.routes);

// paymetns routes
app.use("/api/payments", paymetnRouter.routes);

// Rest
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
