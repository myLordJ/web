'use strict';

angular.module('rac')
  .controller('ShowCtrl', function ($scope, $location, $current) {
    $scope.show = $current.show;
  });
