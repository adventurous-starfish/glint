var Q = require('q');
var Idea = require('./ideaModel.js');

module.exports = {

  // function to retrieve all of the ideas that exist in the MongoDB
  allIdeas: function(req, res, next) {
    
    // bind the Mongoose find method to the Idea model, so that the Q module can use promises with it
    var findAllIdeas = Q.nbind(Idea.find, Idea);
    
    findAllIdeas({})
      .then(function(ideas) {
        res.json(ideas);
      })
      .fail(function(error) {
        next(error);
      });
  },

  // function to add a new idea to the MongoDB database
  newIdea: function(req, res, next) {

    // bind the Mongoose create method to the Idea model, so that the Q module can use promises with it
    var createIdea = Q.nbind(Idea.create, Idea);

    // create a new instance of an Idea model
    var newIdea = {
      title: req.body.title,
      text: req.body.text
    };

    createIdea(newIdea)
      .then(function (createdIdea) {
        if (createdIdea) {
            res.json(createdIdea);
        }
      })
      .fail(function(error) {
        next(error);
      });
  };

};
