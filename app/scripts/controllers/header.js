'use strict';

angular.module('rac')
.controller('HeaderController', function ($scope, $weather, $currentShow, $location) {
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

  $scope.goTo = function(url){
    $location.url(url);
  };
});
