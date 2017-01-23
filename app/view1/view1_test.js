'use strict';

describe('yesNoApp.v1 module ', function() {

  beforeEach(module('yesNoApp.v1'));

  describe('View1Ctrl controller ', function(){

    var ctrl, scope, helloWorld;

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('View1Ctrl', {
        $scope: scope
      });
    }));

    it('should have a value of "hello world" for $scope.test ', function () {
      helloWorld = "hello world";
      // my assertion
      expect(scope.test).toEqual(helloWorld);
      console.log('$scope.test equals "hello world"...yay!');
    });

    it('scope.fromFactory should equal Welcome Visitor ', function () {
      expect(scope.chartsFactory).toEqual('Welcome Visitor');
      console.log('scope.fromFactory equals ', scope.chartsFactory)
    });

  });

});