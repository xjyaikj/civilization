'use strict';

angular.module('myApp').config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/system', {
    templateUrl: 'system/system.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);