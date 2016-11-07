'use strict';

angular.module('rac')
  .controller('AboutCtrl', function ($rootScope, $sce, $page, $gallery) {
    var _this = this;
    $rootScope.title = 'Nosotros';

    $page.get({name: 'about'}, function(page) {
      _this.content = $sce.trustAsHtml(page.content);
      $rootScope.title = page.title;
      $rootScope.subTitle = page.subTitle;
    });

    $gallery.get({name: 'workspace'}, function(gallery) {
      _this.workspace = gallery;
    });

    $gallery.get({name: 'clients'}, function(gallery) {
      _this.clients = gallery;
    });
  });
