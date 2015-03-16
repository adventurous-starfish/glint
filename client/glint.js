var app = angular.module('glint', []);

app.controller('MainCtrl', function(){
  var self = this;

  // mocked up data for now
  self.ideas = [
    {
      title: 'Uber for cats',
      text: 'Imagine a world where cats can roam free and never have to walk again! Introducting Uber for cats.',
      created_by: 'Super Tom',
      created_at: 'Mon Mar 16 2015 14:46:59 GMT-0700 (PDT)',
    },
    {
      title: 'Uber for dogs',
      text: 'Imagine a world where dogs can roam free and never have to walk again! Introducting Uber for cats.',
      created_by: 'Super Fido',
      created_at: 'Sun Mar 15 2015 15:06:59 GMT-0700 (PDT)',
    }
  ];

  // db GET request
  self.getIdeas = function(){};

});

app.controller('SubmitIdeaCtrl', function(){
  var self = this;

  // db POST request
  // remember to escape input
  // submitIdea is called when submit button is clicked
	self.submitIdea = function(){
    window.alert(self.ideaEntry);
  };

});

app.controller('VotesCtrl', function(){
  var self = this;

  // db POST request
  self.upvote = function(){};

  // db POST request
  self.downvote = function(){};

  // db GET request
  self.countVotes = function(){};
});
