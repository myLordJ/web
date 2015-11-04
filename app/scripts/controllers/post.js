'use strict';

angular.module('rac')
  .controller('PostCtrl', function ($scope, $location, $current) {

    $scope.post = $current.post;
    
    if (!$scope.post) {
      $location.path('/blog');
    }
  });
