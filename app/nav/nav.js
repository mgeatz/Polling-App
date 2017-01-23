'use strict';

angular.module('yesNoApp.nav', ['yesNoApp'])

.controller('NavCtrl', ['$scope', 'Nav', 'NavService', function($scope, Nav, NavService) {

  console.log('NavCtrl controller ');

  NavService.navScope($scope);

}]);