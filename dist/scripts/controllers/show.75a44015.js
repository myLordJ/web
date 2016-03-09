'use strict';

angular.module('rac')
  .controller('ShowCtrl', function ($scope, $location, $current) {
    $scope.show = $current.show;

    if (!$scope.show) {
      //TODO: If no post in memory request it to server.
      $location.path('/schedule');
    }
  });
