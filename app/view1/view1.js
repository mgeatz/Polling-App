'use strict';

angular.module('yesNoApp.v1', ['yesNoApp'])

.controller('View1Ctrl', ['$scope', function($scope) {
  console.log('view 1 controller ');
  $scope.test = 'hello world';
}]);