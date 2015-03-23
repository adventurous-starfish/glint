// User Routes
// -----------
//
// The User routes further routes any requests to /api/users in the middleware to specific User methods defined in the User controller.

var userController = require('./usersController.js');

module.exports = function (app) {
 
  app.post('/signin', userController.login);
  app.post('/signup', userController.signup);
};
