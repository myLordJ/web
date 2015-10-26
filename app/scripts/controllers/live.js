'use strict';

angular.module('rac')
  .controller('LiveCtrl', function ($scope, $sce, $page) {
    $scope.title = 'Radio En Vivo!';

    $page.get({name: 'live'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
      $scope.title = page.title;
    });
  });
