const routes = require('express').Router();
const userController = require('../controllers/userController');

routes.post('/login',userController.login);

routes.post('/register',userController.register);

exports.routes = routes;