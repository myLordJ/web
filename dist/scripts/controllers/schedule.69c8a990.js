'use strict';

angular.module('rac')
  .controller('ScheduleCtrl', function ($scope, $rootScope, $mixcloud, $page, $show, $current, $location) {
    $scope.calendarView = 'month';
    $scope.currentDay = new Date();
    $scope.title = 'Programación';
    $scope.subTitle = '';

    $rootScope.underConstruction = true;

    $scope.shows = [];
    $scope.monday = [];
    $scope.tuesday = [];
    $scope.wednesday = [];
    $scope.thursday = [];
    $scope.friday = [];
    $scope.saturday = [];
    $scope.sunday = [];

    $scope.goToShow = function(index) {
        $current.show = this.shows[index];
        $location.path('/show/' + $current.show.title);
    };

    $page.get({name: 'schedule'}, function(page) {
      $rootScope.title = page.title;
      $rootScope.subTitle = page.subTitle;
    });

    $show.get({}, function(res) {
        $scope.shows = res;

        $scope.shows.forEach(function(show) {
            if (show.monday) {
                $scope.monday.push(show);
            }

            if (show.tuesday) {
                $scope.tuesday.push(show);
            }

            if (show.wednesday) {
                $scope.wednesday.push(show);
            }

            if (show.thursday) {
                $scope.thursday.push(show);
            }

            if (show.friday) {
                $scope.friday.push(show);
            }

            if (show.saturday) {
                $scope.saturday.push(show);
            }

            if (show.sunday) {
                $scope.sunday.push(show);
            }
        });
    });

  });
