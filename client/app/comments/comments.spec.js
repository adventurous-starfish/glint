'use strict';

describe('CommentsCtrl', function (){
  beforeEach(module('glint'));
  var $rootScope;
  var scope;
  var ctrl;
  var $httpBackend;
  var $controller;
  var Comments;

  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    Comments = $injector.get('Comments');
    $controller = $injector.get('$controller');
    ctrl = $controller('CommentsCtrl', {
      self: scope,
    });
  }));

  it('should have a comment property', function (){
    expect(ctrl).to.have.property('comment');
  });

  it('should have a submitComment function', function (){
    expect(ctrl.submitComment).to.be.a('function');
  });

  it('should be able to make a successful POST request with submitComment()', function (){
    ctrl.comment.text = 'This is the best idea ever.';
    // ctrl.comment.user_id = '1234abc';
    var mockIdea_id = '5199aaa';
    $httpBackend.expectPOST("/api/comments").respond(200, '');
    ctrl.submitComment(ctrl.comment, mockIdea_id);
    $httpBackend.flush();
    ctrl.comment = {};
  });

  it('should have a displayComments function', function (){
    expect(ctrl.displayComments).to.be.a('function');
  });

  it('should be able to make a successful GET request with displayComments()', function (){
    var mockIdea_id = '5199aaa';
    $httpBackend.expectGET("/api/comments").respond(200, '');
    ctrl.displayComments(mockIdea_id);
    $httpBackend.flush();
  });
});
