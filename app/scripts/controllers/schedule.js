'use strict';

angular.module('rac')
  .controller('ScheduleCtrl', function ($scope, $mixcloud, $page, $show, $current, $location) {
    $scope.calendarView = 'month';
    $scope.currentDay = new Date();
    $scope.shows = [];
    $scope.title = 'Programación';
    $scope.subTitle = '';

    $scope.goToShow = function(index) {
        $current.show = this.shows[index];
        $location.path('/show/' + $current.show.title);
    };

    $page.get({name: 'schedule'}, function(page) {
      $scope.title = page.title;
      $scope.subTitle = page.subTitle;
    });

    $show.get({}, function(res) {
        $scope.shows = res;
    });

  });
