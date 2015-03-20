'use strict';

describe('AuthCtrl', function(){
  beforeEach(module('glint'));
  var $rootScope;
  var scope;
  var ctrl;
  var $httpBackend;
  var $controller;
  var Auth;

  beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    Auth = $injector.get('Auth');
    $controller = $injector.get('$controller');
    ctrl = $controller('AuthCtrl', {
      self: scope,
    });
  }));

  it('should have a login function', function(){
    expect(ctrl.login).to.be.a('function');
  });

  it('should have a signup function', function(){
    expect(ctrl.signup).to.be.a('function');
  });


});
