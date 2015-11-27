'use strict';

angular.module('rac')
  .controller('PostCtrl', function ($scope, $location, $current, $window) {

    $scope.post = $current.post;
    
    if (!$scope.post) {
      //TODO: If no post in memory request it to server.
      $location.path('/blog');
    }
    else {
      $scope.post.url = $window.location.href;
    }
  });
