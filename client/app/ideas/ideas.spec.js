'use strict';

describe('IdeasCtrl', function(){
  beforeEach(module('glint'));
  var $rootScope;
  var scope;
  var ctrl;
  var $httpBackend;
  var $controller;
  var Ideas;

  beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    Ideas = $injector.get('Ideas');
    $controller = $injector.get('$controller');
    ctrl = $controller('IdeasCtrl', {
      self: scope,
    });
  }));

  // afterEach(function() {
  //   $httpBackend.verifyNoOutstandingExpectation();
  //   $httpBackend.verifyNoOutstandingRequest();
  // });

  describe('displayIdeas', function(){
    it('should have a data property', function(){    
      expect(ctrl).to.have.property('data');    
    });

    it('should have a displayIdeas function', function(){
      expect(ctrl.displayIdeas).to.be.a('function');
    });

    it('should call displayIdeas() when controller is loaded', function(){
      var mockIdeas = [{}, {}, {}];
      $httpBackend.expectGET("/api/ideas").respond(mockIdeas);
      $httpBackend.flush();
      expect(ctrl.data.ideas).to.eql(mockIdeas);
    });    
  });

  it('should have an idea property', function(){
    expect(ctrl).to.have.property('idea');
  });

  describe('submitIdea', function(){
    it('should have a submitIdea function', function(){
      expect(ctrl.submitIdea).to.be.a('function');
    });

    it('should be able to create new ideas with submitIdea()', function(){
      // var mockIdeas = [{}, {}, {}];
      // $httpBackend.expectGET("/api/ideas").respond(mockIdeas);
      // $httpBackend.expectPOST("/api/ideas").respond(200, '');
      // // $httpBackend.expectGET("/api/ideas").respond(mockIdeas);
      // ctrl.submitIdea();
      // $httpBackend.flush();
    });
  });
});
