'use strict';

angular.module('yesNoApp.v2', ['yesNoApp'])

.controller('View2Ctrl', ['Nav', function(Nav) {
  console.log('view 2 controller ');

  Nav.updateNav(sc, 2);

}]);