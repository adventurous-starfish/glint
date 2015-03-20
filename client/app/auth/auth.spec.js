'use strict';

describe('AuthCtrl', function (){
  beforeEach(module('glint'));
  var $rootScope;
  var scope;
  var ctrl;
  var $httpBackend;
  var $controller;
  var Auth;

  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    scope = $rootScope.$new();
    $httpBackend = $injector.get('$httpBackend');
    Auth = $injector.get('Auth');
    $controller = $injector.get('$controller');
    ctrl = $controller('AuthCtrl', {
      self: scope,
    });
  }));

  it('should have a user property', function (){
    expect(ctrl).to.have.property('user');
  });

  it('should have a login function', function (){
    expect(ctrl.login).to.be.a('function');
  });

  it('should be able to make a successful POST request with login()', function (){
    ctrl.user.username = 'Pat';
    ctrl.user.password = '1234abc';
    $httpBackend.expectPOST("/api/signin").respond(200, '');
    ctrl.login();
    $httpBackend.flush();
    ctrl.user = {};
  });

  it('should have a signup function', function (){
    expect(ctrl.signup).to.be.a('function');
  });

  it('should be able to make a successful POST request with signup()', function (){
    ctrl.user.username = 'Pat';
    ctrl.user.password = '1234abc';
    $httpBackend.expectPOST("/api/signup").respond(200, '');
    ctrl.signup();
    $httpBackend.flush();
    ctrl.user = {};
  });
});
