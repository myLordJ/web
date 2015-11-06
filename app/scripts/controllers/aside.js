'use strict';

angular.module('rac')
.controller('AsideCtrl', function ($scope, $ad, $widget, $weather) {
  $scope.ads = [];
  $scope.widgets = [];

  $ad.get({}, function(ads) {
    $scope.ads = ads;
  });

  $widget.get({}, function(widgets) {
    $scope.widgets = widgets;
  });

  $weather.get({}, function(city){
    console.log(city);
  });

});
