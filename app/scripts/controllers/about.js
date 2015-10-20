'use strict';

angular.module('rac')
  .controller('AboutCtrl', function ($scope, $page) {
    $scope.content = $page.get({id: 'about'});
  });
