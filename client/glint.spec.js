'use strict';


describe('MainCtrl', function(){
  beforeEach(module('glint'));
  var scope;
  var ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('MainCtrl', {
      self: scope,
    });
  }));

  it('should have a getIdeas function', function(){
    expect(ctrl.getIdeas).to.be.a('function');
  });
});

describe('SubmitIdeaCtrl', function(){
  beforeEach(module('glint'));
  var scope;
  var ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('SubmitIdeaCtrl', {
      self: scope,
    });
  }));

  it('should have a submitIdea function', function(){
    expect(ctrl.submitIdea).to.be.a('function');
  });
});

describe('VotesCtrl', function(){
  beforeEach(module('glint'));
  var scope;
  var ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('VotesCtrl', {
      self: scope,
    });
  }));

  it('should have an upvote function', function(){
    expect(ctrl.upvote).to.be.a('function');
  });

  it('should have an downvote function', function(){
    expect(ctrl.downvote).to.be.a('function');
  });

});

