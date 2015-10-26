'use strict';

angular.module('rac')
  .controller('HomeCtrl', function ($scope, $gallery, $page, $sce) {
    $scope.images = [];

    $page.get({name: 'home'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
    });

    $gallery.get({key: 'home-page-slider'}, function(gallery) {
      $scope.images = gallery;
    });
  });
