'use strict';

describe('VotesCtrl', function(){
  beforeEach(module('glint'));
  var $rootScope;
  var scope;
  var ctrl;
  var $httpBackend;
  var $controller;
  var Votes;

  beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    Votes = $injector.get('Votes');
    $controller = $injector.get('$controller');
    ctrl = $controller('VotesCtrl', {
      self: scope,
    });
  }));

  it('should have an upvote function', function(){
    expect(ctrl.upvote).to.be.a('function');
  });

  it('should be able to increment & update an idea\'s votes with upvote()', function(){
    var mockIdea = JSON.stringify({ _id: '5508b3', votes: 5 });
    $httpBackend.expectPOST("/api/vote/upvote").respond(200, '');
    ctrl.upvote(mockIdea);
    $httpBackend.flush();
    // expect(mockIdea.votes).to.eql(6);
  });

  it('should have an downvote function', function(){
    expect(ctrl.downvote).to.be.a('function');
  });

  it('should be able to decrement & update an idea\'s votes with downvote()', function(){
    var mockIdea = JSON.stringify({ _id: '5508b3', votes: 5 });
    $httpBackend.expectPOST("/api/vote/downvote").respond(200, '');
    ctrl.downvote(mockIdea);
    $httpBackend.flush();
    // expect(mockIdea.votes).to.eql(4);
  });
});

