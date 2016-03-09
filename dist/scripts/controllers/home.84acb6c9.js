'use strict';

angular.module('rac')
  .controller('HomeCtrl', function ($scope, $rootScope, $gallery, $page, $sce, $mixcloud) {
    $scope.images = [];
    $scope.mixcloud = [];
    $scope.interval = 3000;

    $rootScope.showHomeVideo = true;

    $page.get({name: 'home'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
    });

    $gallery.get({name: 'home-page-slider'}, function(gallery) {
      if (gallery && gallery.length) {
        gallery[0].active = true;
        $scope.images = gallery;
      }
    });

    $mixcloud.get({}, function(res) {
      $scope.mixcloud = res.data.slice(0, 6);
      console.log($scope.mixcloud);
    });
  });
