var Q = require('q');
var Idea = require('../ideas/ideaModel.js');

module.exports = {

  // adds one to the vote count for a given idea
  upvote: function(req, res, next) {
    updateVoteCount(req, res, 1);
  },

  // subtracts one from the vote count for a given idea
  downvote: function(req, res, next) {
    updateVoteCount(req, res, -1);
  }

};

var updateVoteCount = function(req, res, changeValue) {

  // bind the findOneandUpdate method to use promises
  var updateVotes = Q.nbind(Idea.findOneAndUpdate, Idea);

  var query = { title: req.body.title };
    
  updateVotes(query, { $inc: { votes: changeValue } })
    .then(function (idea) {
        res.send(idea);
      })
    .fail(function (err) {
      console.log(err);
      next(err);
    });
};
