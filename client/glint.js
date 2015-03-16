var app = angular.module('glint', []);

app.controller('MainCtrl', function(){
  var self = this;

  self.exampleText = 'test';
  self.ideas = [];

  self.addIdea = function(){};
});

app.controller('SubmitIdea', function(){
  // ideaEntry is the text inside of .form-control input box
  this.ideaEntry;

  // submitIdea is called when submit button is clicked
	this.submitIdea = function(){
    window.alert(this.ideaEntry);
  }

})