'use strict';

angular.module('rac')
.controller('AsideCtrl', function ($ad, $widget) {
  var _this = this;

  this.ads = [];
  this.widgets = [];

  $ad.get({}, function(ads) {
    _this.ads = ads;
  });

  $widget.get({}, function(widgets) {
    _this.widgets = widgets;
  });

});
