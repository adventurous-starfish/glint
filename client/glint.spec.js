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

  it('should have an ideas property on the controller', function(){
    expect(ctrl).to.have.property('ideas');
  });

  it('should have a getIdeas function', function(){
    //
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

  it('should have a submitIdeas function', function(){
    //
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
    //
  });

  it('should have an downvote function', function(){
    //
  });

  it('should have an countVotes function', function(){
    //
  });
});