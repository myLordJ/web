'use strict';

angular.module('rac')
  .controller('ScheduleCtrl', function ($scope, $rootScope, $mixcloud, $page, $show, $current, $location) {
    $scope.calendarView = 'month';
    $scope.currentDay = new Date();
    $scope.title = 'Programación';
    $scope.subTitle = '';

    $scope.shows = [];

    $scope.goToShow = function(show) {
      $current.show = show;
      $location.path('/show/' + $current.show.title);
    };

    $page.get({name: 'schedule'}, function(page) {
      $rootScope.title = page.title;
      $rootScope.subTitle = page.subTitle;
    });

    $show.get({}, function(shows) {
        $scope.shows = shows;
        $scope.loadedImages = true;
    });

  });
