angular.module('glint.ideas', [])
.controller('IdeasCtrl', function (Ideas, $filter){
  var self = this;
  self.data = { ideas: [] };
  self.idea = {};
  self.postSuccess = false;
  self.submitted = false;

  // display all ideas currently in db
  self.displayIdeas = function(){
    Ideas.getIdeas()
      .then(function (results){
        results = $filter('orderBy')(results, 'votes', true);
        self.data.ideas = results;
      })
      .catch(function (error){
        console.error('displayIdeas error', error);
      });
  };

  // submit new Idea
  self.submitIdea = function (){

    // show description box
    if (self.submitted === false){
      self.submitted = true;
    } else {

    // escape to handle XSS injection
    _.escape(self.idea.title);
    _.escape(self.idea.text);
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

      // hide description box after submit
      // self.submitted = false;
    }
  };

  self.displayIdeas();
});
