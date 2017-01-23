'use strict';

angular.module('yesNoApp')

.factory('Nav', function() {

  return {
    updateNav: function ($scope, view) {
      switch(view) {
        case 1:
          $scope.nav = 'alpha';
          break;
        case 2:
          $scope.nav = 'bravo';
          break;
        default:
          $scope.nav = 'alpha';
      }
    }
  };

});