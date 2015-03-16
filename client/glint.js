var app = angular.module('glint', []);

app.controller('MainCtrl', function(){
  var self = this;

  self.ideas = [];

  self.addIdea = function(){};
});

app.controller('SubmitIdea', function(){
	this.submit = function(){
    window.alert('HOORAY!');
  }
})