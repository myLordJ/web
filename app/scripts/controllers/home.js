'use strict';

angular.module('rac')
  .controller('HomeCtrl', function ($rootScope, $gallery, $page, $sce, $mixcloud) {
    var _this = this;

    this.loadedImages = false;
    this.images = [];
    this.mixcloud = [];
    this.interval = 3000;

    $rootScope.showHomeVideo = true;

    $page.get({name: 'home'}, function(page) {
      _this.content = $sce.trustAsHtml(page.content);
    });

    $gallery.get({name: 'home-page-slider'}, function(gallery) {
      if (gallery && gallery.length) {
        _this.images = gallery;
        _this.loadedImages = true;
      }
    });

    $mixcloud.get({}, function(res) {
      _this.mixcloud = res.data.slice(0, 6);
    });
  });
