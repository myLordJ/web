'use strict';

angular.module('rac')
.controller('SidebarCtrl', function ($scope, $ad) {
  $scope.ads = [];
  $scope.title = 'Blog';

  $ad.get({}, function(ads) {
    $scope.ads = ads;
  });

});
