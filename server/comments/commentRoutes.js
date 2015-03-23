// Comment Routes
// --------------
//
// The Comment routes further routes any requests to /api/comments in the middleware to specific Comment methods defined in the Comment controller.

var commentController = require('./commentController.js');

module.exports = function (app) {
    // Further route from the /api/comments path. A GET request will return all comments for the specified idea. A POST request will add a comment to the specified idea.
    app.route('/')
      .get(commentController.allComments)
      .post(commentController.newComment);
};
