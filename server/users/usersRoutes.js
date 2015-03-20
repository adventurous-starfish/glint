var userController = require('./usersController.js');

module.exports = function (app) {
 
  app.post('/signin', userController.login);
  app.post('/signup', userController.signup);
};