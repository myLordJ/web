'use strict';

angular.module('rac')
  .controller('MainCtrl', function ($scope, $gallery) {
    $gallery.get({key: 'home-page-slider'}, function(page) {
      $scope.content = page.content;
    });
  });
