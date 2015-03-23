// Comment Controller
// ------------------
//
// The comment controller handles requests passed from the comment router. 

// The Q module is used to bind Mongoose methods to use promises.
var Q = require('q');
var Comment = require('./commentModel.js');

module.exports = {

  // Retrieve all of the comments for a given idea from the MongoDB database.
  allComments: function(req, res, next) {
    
    // Bind the Mongoose find method to the Comment model, so that the Q module can use promises with it.
    var findAllComments = Q.nbind(Comment.find, Comment);
    
    // Find all comments for a given idea. Send back the array of comments.
    findAllComments({idea_id: req.body.idea_id})
      .then(function(ideas) {
        res.json(comments);
      })
      .fail(function(error) {
        next(error);
      });
  },

  // Add a new comment to the MongoDB database.
  newComment: function(req, res, next) {

    // Bind the Mongoose create method to the Comment model, so that the Q module can use promises with it.
    var createComment = Q.nbind(Comment.create, Comment);

    // Create a new document from the Comment model. If successfully created then the new Comment document is returned.
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
