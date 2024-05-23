const routes = require("express").Router();
const paymentController = require("../controllers/paymentController");

// get key
routes.get('/getKey',paymentController.getkey);

// this is checkout
routes.post("/checkout", paymentController.checkout);
// payment verification
routes.post('/paymentVarification',paymentController.paymentVarification);
exports.routes = routes;
