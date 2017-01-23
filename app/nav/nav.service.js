angular.module('yesNoApp')

.service('NavService', function() {

  return {
    navScope: function (scope) {
      sc = scope;
      return sc;
    }
  };

});