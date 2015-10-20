'use strict';

angular.module('rac')
  .controller('AboutCtrl', function ($scope, $page) {
    $page.get({id: 'about'}, function(page) {
      $scope.content = page.content;
    });
  });
