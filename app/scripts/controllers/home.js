'use strict';

angular.module('rac')
  .controller('HomeCtrl', function ($scope, $gallery, $page, $sce) {
    $scope.images = [];
    $scope.interval = 3000;

    $page.get({name: 'home'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
    });

    $gallery.get({key: 'home-page-slider'}, function(gallery) {
      gallery[0].active = true;
      $scope.images = gallery;
    });
  });
