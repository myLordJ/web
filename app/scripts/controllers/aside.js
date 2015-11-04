'use strict';

angular.module('rac')
.controller('AsideCtrl', function ($scope, $ad) {
  $scope.ads = [];
  $scope.title = 'Blog';

  $ad.get({}, function(ads) {
    $scope.ads = ads;
  });

});
