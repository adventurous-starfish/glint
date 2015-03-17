var ideaController = require('./ideaController.js');

module.exports = function (app) {
    // route get and post requests from the home page
    // GET will return all of the posted ideas from the database
    // POST will add a new idea to the database
    app.route('/')
      .get(ideaController.allIdeas)
      .post(ideaController.newIdea);
};
