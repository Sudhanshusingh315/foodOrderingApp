const routes = require('express').Router();
const protected = require('../middleware/protected');
const cartController = require('../controllers/cartController');



routes.post('/addToCart',protected,cartController.addToCart);
routes.get('/showCart',protected,cartController.getCartItem);
// delete the whole cart
routes.delete('/deleteFromCart',protected,cartController.deleteWholeCart);
// delete only items
routes.patch('/deleteSpecific',protected,cartController.updateCart);


exports.routes = routes;