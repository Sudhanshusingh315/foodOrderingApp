const routes = require("express").Router();
const foodController = require("../controllers/foodController");

// routes api
routes.get("/", foodController.getFood);
routes.post("/add", foodController.addFood);
routes.delete('/delete', foodController.removeFood);
exports.routes = routes;
