'use strict';

angular
  .module('rac', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mwl.calendar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/live', {
        templateUrl: 'views/live.html',
        controller: 'LiveCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
