'use strict';

angular.module('rac')
.controller('HeaderCtrl', function ($scope, $weather) {
  $scope.temp = {};

  $weather.get({}, function(city){
    $scope.temp = city.main;
  });
});
