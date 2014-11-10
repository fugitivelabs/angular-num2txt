'use strict';

angular.module('myApp', [
  "angular-num2txt"
])
.controller('HomeCtrl', ['$scope', function($scope) {
  console.log('HomeCtrl loaded...');
  $scope.number = 33449.67;
  $scope.currency = "$467.43";
}])

// end file
;