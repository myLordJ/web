'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
  .controller('ScheduleCtrl', function ($scope) {
    $scope.calendarView = 'month';
    $scope.currentDay = new Date();

    $scope.events = [
      {
        title: 'Perros de la Calle',
        type: 'info',
        startsAt: new Date(2015,1,1,10),
        endsAt: new Date(2016,1,1,10),
        editable: false,
        deletable: false,
        draggable: false, 
        resizable: true,
        recursOn: 'month'
      },
      {
        title: 'Basta de Todo',
        type: 'success',
        startsAt: new Date(2015,1,1,14),
        endsAt: new Date(2016,1,1,14),
        editable: false,
        deletable: false,
        draggable: false, 
        resizable: true,
        recursOn: 'month'
      },
      {
        title: 'No Somos Nadie',
        type: 'warning',
        startsAt: new Date(2015,1,1,6),
        endsAt: new Date(2016,1,1,10),
        editable: false,
        deletable: false,
        draggable: false, 
        resizable: true,
        recursOn: 'month'
      },
      {
        title: 'Metro y Medio',
        type: 'inverse',
        startsAt: new Date(2015,1,1,18),
        endsAt: new Date(2016,1,1,18),
        editable: false,
        deletable: false,
        draggable: false, 
        resizable: true,
        recursOn: 'month'
      },
    ];
  });
