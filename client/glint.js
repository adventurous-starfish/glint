var app = angular.module('glint', ['glint.services'])
  .filter('moment', function() {
    return function(dateString) {
        return moment(dateString).fromNow();
    };
  });

app.controller('IdeasCtrl', function(Ideas){
  var self = this;
  self.data = { ideas: [] };
  self.postSuccess = false;

  // db GET request moves to factory
  self.displayIdeas = function(){
    Ideas.getIdeas()
      .then(function(results){
        // self.data.ideas = results;
      })
      .catch(function(error){
        console.error('displayIdeas error', error);
      });
  };

  // submitIdea is called when submit button is clicked
  self.submitIdea = function(){
    self.submitted = true;
    // escape to handle XSS injection
    var escapedIdea = _.escape(self.ideaTitle);
    var idea = JSON.stringify({
      title: escapedIdea
    });

    // call factory POST request to CREATE idea in db
    Ideas.createIdea(idea)
      .then(function(response){
        // display something to user to confirm post
        self.postSuccess = true;
        // redisplay all ideas
        self.displayIdeas();
      })
      .catch(function(error){
        console.error('createIdea error', error);
      });
  };

  self.displayIdeas();

});

app.controller('VotesCtrl', function(){
  var self = this;

  // call factory db POST function, and handle results
  // options: 
  //   1) doing this updates the number to reflect latest db count
  //      this may be confusing for user who sees the # go up/down lots
  //   2) doing this simply increments only by user added vote, keeping
  //      the results more like what user expects
  self.upvote = function(){
    console.log('upvote');
    // Votes.updateVote()
    //   .then(function(response){

    //   })
    //   .catch(function(error){
    //     console.error('upvote error', error);
    //   });
  };

  // if results handling here is different from upvote, then
  // specify difference here. Otherwise, remove.
  self.downvote = function(){
    console.log('downvote');
  };

});
