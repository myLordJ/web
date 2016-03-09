'use strict';

angular.module('rac')
  .controller('LiveCtrl', function ($scope, $rootScope, $sce, $page) {
    $rootScope.title = 'Radio En Vivo!';

    $page.get({name: 'live'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
      $rootScope.title = page.title;
      $rootScope.subtitle = page.subtitle;
    });
  });
