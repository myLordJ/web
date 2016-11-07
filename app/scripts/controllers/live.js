'use strict';

angular.module('rac')
  .controller('LiveCtrl', function ($rootScope, $sce, $page) {
    var _this = this;
    $rootScope.title = 'Radio En Vivo!';

    $page.get({name: 'live'}, function(page) {
      _this.content = $sce.trustAsHtml(page.content);
      $rootScope.title = page.title;
      $rootScope.subtitle = page.subtitle;
    });
  });
