'use strict';

describe('yesNoApp.v2 module ', function() {

  beforeEach(module('yesNoApp.v2'));

  describe('View2Ctrl controller ', function(){

    var ctrl;

    beforeEach(inject(function($controller) {
      ctrl = $controller('View2Ctrl');
    }));

    it('should be defined ', function () {
      // my assertion
      expect(ctrl).toBeDefined();
      console.log('View2Ctrl is defined...yay!');
    });

  });

});