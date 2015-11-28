'use strict';

angular.module('rac')
.controller('HeaderCtrl', function ($scope, $weather, $currentShow) {
  $scope.temp = {};
  $scope.isPlaying = false;

  $weather.get({}, function(city){
    $scope.temp = city.main;
  });

  $scope.play = function() {
    $scope.isPlaying = !$scope.isPlaying;
  };

  $currentShow.get({}, function(show){
    $scope.currentShow = show;
  });
});
