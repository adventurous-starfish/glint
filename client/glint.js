var app = angular.module('glint', ['glint.services']);

app.controller('IdeasCtrl', function(Ideas){
  var self = this;
  self.data = { ideas: [] };

  // db GET request moves to factory
  self.displayIdeas = function(){
    Ideas.getIdeas()
      .then(function(results){
        console.log('displayIdeas success', results);
        self.data.ideas = results;
        console.log('data.ideas', self.data.ideas);
      })
      .catch(function(error){
        console.error('displayIdeas error', error);
      });
  };

  // submitIdea is called when submit button is clicked
  self.submitIdea = function(){
    // escape to handle XSS injection
    var escapedIdea = _.escape(self.ideaTitle);
    var idea = JSON.stringify({
      title: escapedIdea
    });

    // call factory POST request to CREATE idea in db
    Ideas.createIdea(idea)
      .then(function(response){
        console.log('createIdea success', response);
        // will need to display something to user to confirm post
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
