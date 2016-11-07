'use strict';

angular.module('rac')
  .controller('ShowCtrl', function ($rootScope, $location, $current) {
    this.show = $current.show;

    if (!this.show) {
      $location.path('/schedule');
      return;
    }

    $rootScope.hideCover = true;

    if (!this.show.coverPicture || this.show.coverPicture.url) {
       this.show.coverPicture = {};
       this.show.coverPicture.url = 'images/bg.jpg';
    }

  });
