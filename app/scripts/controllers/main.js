'use strict';

angular.module('rac')
  .controller('MainCtrl', function ($scope, $gallery) {
    $scope.images = [];

    $gallery.get({key: 'home-page-slider'}, function(gallery) {
      $scope.images = gallery;
    });
  });
