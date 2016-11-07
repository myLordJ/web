'use strict';

angular.module('rac')
.controller('HeaderController', function ($rootScope, $weather, $currentShow, $location) {
  var _this = this;
  
  this.weather = {};
  this.isPlaying = false;

  $weather.get({}, function(city) {
    _this.weather = city.currently;
  });

  this.play = function() {
    _this.isPlaying = !_this.isPlaying;
  };

  $currentShow.get({}, function(show) {
    _this.currentShow = show;
  });

  this.goTo = function(url) {
    $location.url(url);

    $rootScope.showHomeVideo = url.indexOf('home') !== -1 ? true : false;
    $rootScope.underConstruction = false;
    $rootScope.hideCover = false;
  };

  this.isSelected = function(url) {
    return url === $location.path();
  };

});
