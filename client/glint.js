var app = angular.module('glint', []);

app.controller('MainCtrl', function(){
  var self = this;

  self.exampleText = 'test';
  self.ideas = [];

  self.addIdea = function(){};
});

app.controller('SubmitIdea', function(){
  this.ideaEntry;

	this.submitIdea = function(){
    window.alert(this.ideaEntry);
  }
})