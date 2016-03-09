'use strict';

angular.module('rac')
  .controller('AboutCtrl', function ($scope, $rootScope, $sce, $page, $gallery) {
    $rootScope.title = 'Nosotros';

    $page.get({name: 'about'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
      $rootScope.title = page.title;
      $rootScope.subTitle = page.subTitle;
    });

    $gallery.get({name: 'workspace'}, function(gallery) {
      $scope.workspace = gallery;
    });

    $gallery.get({name: 'clients'}, function(gallery) {
      $scope.clients = gallery;
    });
  });
