'use strict';

angular.module('rac')
.controller('HeaderCtrl', function ($scope, $weather) {
  $scope.temp = {};
  $scope.isPlaying = false;

  $weather.get({}, function(city){
    $scope.temp = city.main;
  });

  $scope.play = function() {
    $scope.isPlaying = !$scope.isPlaying;
  };
});
