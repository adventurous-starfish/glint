var Q = require('q');

module.exports = {

  // adds one to the vote count for a given idea
  upvote: function(req, res, next) {
    var findAllIdeas = Q.nbind(Idea.find, Idea);
    
    findAllIdeas({})
      .where('_id').equals(req._id)
      .then(function(ideas) {
        res.json(ideas);
      })
      .fail(function(error) {
        next(error);
      });
  },

  // subtracts one to the vote count for a given idea
  downvote: function(req, res, next) {

  }

};
