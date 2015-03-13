'use strict';

describe('MainCtrl', function(){

  beforeEach(module('glint'));
  beforeEach(inject(function($injector){
    var $controller = $injector.get('$controller');

    createController = function(){
      return $controller('MainCtrl', {
        ideas: [1, 2, 3]
      });
    };
  }));

  it('should have an ideas property on the controller', function(){
    createController();
    expect(MainCtrl).to.have.property('ideas', [1, 2, 3]);
  });
});