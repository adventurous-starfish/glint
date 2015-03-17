'use strict';


describe('IdeasCtrl', function(){
  beforeEach(module('glint'));
  var scope;
  var ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('IdeasCtrl', {
      self: scope,
    });
  }));

  it('should have a data property', function(){    
    expect(ctrl).to.have.property('data');    
  });

  it('should have a displayIdeas function', function(){
    expect(ctrl.getIdeas).to.be.a('function');
  });

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

