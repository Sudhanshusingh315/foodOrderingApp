require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRotuer = require("./routes/userRoutes");
const foodRouter = require("./routes/foodRoutes");
const port = process.env.PORT;
const app = express();

// Middlesware
app.use(express.json());
app.use(cors());

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

// Rest
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
