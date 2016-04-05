'use strict';

angular.module('rac')
  .controller('ShowCtrl', function ($scope, $rootScope, $location, $current) {
    $scope.show = $current.show;

    if (!$scope.show) {
      $location.path('/schedule');
      return;
    }

    $rootScope.hideCover = true;

    if (!$scope.show.coverPicture || !$scope.show.coverPicture.url) {
       $scope.show.coverPicture = {};
       $scope.show.coverPicture.url = 'images/bg.jpg';
    }

  });
