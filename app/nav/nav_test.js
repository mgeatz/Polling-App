'use strict';

describe('yesNoApp.nav module ', function() {

  beforeEach(module('yesNoApp.nav'));

  describe('NavCtrl controller ', function(){

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('NavCtrl', {
        $scope: scope
      });
    }));

    it('NavCtrl should set the global variable "sc" ', function () {
      // my assertion
      expect(sc).toBeDefined();
      console.log('sc is defined ');
    });

  });

});