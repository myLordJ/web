'use strict';

angular.module('rac')
  .controller('ScheduleCtrl', function ($rootScope, $mixcloud, $page, $show, $current, $location) {
    var _this = this;

    this.calendarView = 'month';
    this.currentDay = new Date();
    this.title = 'Programación';
    this.subTitle = '';

    this.shows = [];

    this.goToShow = function(show) {
      $current.show = show;
      $location.path('/show/' + $current.show.title);
    };

    $page.get({name: 'schedule'}, function(page) {
      $rootScope.title = page.title;
      $rootScope.subTitle = page.subTitle;
    });

    $show.get({}, function(shows) {
        _this.shows = shows;
        _this.loadedImages = true;
    });

  });
