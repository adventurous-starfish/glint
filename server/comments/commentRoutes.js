var commentController = require('./commentController.js');

module.exports = function (app) {
    // further route from the '/api/comments' path
    // a GET will return all comments for the specified idea
    // a POST will add a comment to the specified idea
    app.route('/')
      .get(commentController.allComments)
      .post(commentController.newComment);
};