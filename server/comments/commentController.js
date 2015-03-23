var Q = require('q');
var Comment = require('./commentModel.js');

module.exports = {

  // function to retrieve all of the comments for a given idea from the MongoDB
  allComments: function(req, res, next) {
    
    // bind the Mongoose find method to the Comment model, so that the Q module can use promises with it
    var findAllComments = Q.nbind(Comment.find, Comment);
    
    findAllComments({idea_id: req.body.idea_id})
      .then(function(ideas) {
        res.json(comments);
      })
      .fail(function(error) {
        next(error);
      });
  },

  // function to add a new comment to the MongoDB database
  newComment: function(req, res, next) {

    // bind the Mongoose create method to the Comment model, so that the Q module can use promises with it
    var createComment = Q.nbind(Comment.create, Comment);

    // create a new instance of a Comment model
    var newComment = {
      text: req.body.text,
      idea_id: req.body.idea_id,
      created_by: req.body.created_by,
      created_at: req.body.created_at
    };

    createComment(newComment)
      .then(function (createdComment) {
        if (createdComment) {
            res.json(createdComment);
        }
      })
      .fail(function(error) {
        next(error);
      });
  }

};
