'use strict';

angular.module('rac')
  .controller('PostCtrl', function ($scope, $current) {

    $scope.post = $current.post;
    $scope.algo = 'algo';
  });
