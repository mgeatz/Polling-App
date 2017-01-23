'use strict';

angular.module('yesNoApp.v1', ['yesNoApp'])

.controller('View1Ctrl', ['$scope', 'Charts', 'Nav', function($scope, Charts, Nav) {

  console.log('view 1 controller ');

  Nav.updateNav(sc, 1);

  $scope.test = 'hello world';
  $scope.chartsFactory = Charts.sayHello('Visitor');

  Charts.buildMap();

}]);