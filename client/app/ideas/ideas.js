angular.module('glint.ideas', [])
.controller('IdeasCtrl', function (Ideas){
  var self = this;
  self.data = { ideas: [] };
  self.idea = {};
  self.postSuccess = false;

  // display all ideas currently in db
  self.displayIdeas = function(){
    Ideas.getIdeas()
      .then(function (results){
        self.data.ideas = results;
      })
      .catch(function (error){
        console.error('displayIdeas error', error);
      });
  };

  // submit new Idea
  self.submitIdea = function (){
    // escape to handle XSS injection
    _.escape(self.idea.title);
    var idea = JSON.stringify(self.idea);
    
    // POST new idea, display confirmation, redisplay all ideas
    Ideas.createIdea(idea)
      .then(function (response){
        self.postSuccess = true;
        self.displayIdeas();
      })
      .catch(function (error){
        console.error('createIdea error', error);
      });
  };

  self.displayIdeas();
});
