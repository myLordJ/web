'use strict';

angular.module('rac')
.controller('HeaderCtrl', function ($scope, $weather, $currentShow) {
  $scope.weather = {};
  $scope.isPlaying = false;

  $weather.get({}, function(city){
    $scope.weather = city.currently;
  });

  $scope.play = function() {
    $scope.isPlaying = !$scope.isPlaying;
  };

  $currentShow.get({}, function(show){
    $scope.currentShow = show;
  });
});
