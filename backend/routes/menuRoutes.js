const routes = require("express").Router();
const menuController = require("../controllers/menuController");



routes.post("/addItem",menuController.addItem);




exports.routes = routes;
