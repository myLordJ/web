'use strict';

angular.module('rac')
  .controller('AboutCtrl', function ($scope, $sce, $page) {
    $scope.title = 'Nosotros';

    $page.get({id: 'about'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
      $scope.title = page.title;
    });
  });
