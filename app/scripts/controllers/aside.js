'use strict';

angular.module('rac')
.controller('AsideCtrl', function ($scope, $ad, $widget) {
  $scope.ads = [];
  $scope.widgets = [];

  $ad.get({}, function(ads) {
    $scope.ads = ads;
  });

  $widget.get({}, function(widgets) {
    $scope.widgets = widgets;
  });

});
