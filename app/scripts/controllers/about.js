'use strict';

angular.module('rac')
  .controller('AboutCtrl', function ($scope, $sce, $page, $gallery) {
    $scope.title = 'Nosotros';

    $page.get({name: 'about'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
      $scope.title = page.title;
      $scope.subTitle = page.subTitle;
    });

    $gallery.get({key: 'workspace'}, function(gallery) {
      $scope.images = gallery;
    });
  });
