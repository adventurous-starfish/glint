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
});