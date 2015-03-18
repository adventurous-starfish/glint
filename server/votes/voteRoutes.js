var voteController = require('./voteController.js');

module.exports = function (app) {
    // route post requests from the home page relating to voting

    // POST to upvote will increase the vote count by 1 in the database
    // POST to downvote will decrease the vote count by 1 in the database
    app.route('/api/vote/upvote')
      .post(voteController.upvote)
    app.route('/api/vote/downvote')
      .post(voteController.downvote);
    // does this need a catch all fallback path and action?
};
