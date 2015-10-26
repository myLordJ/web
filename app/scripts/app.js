'use strict';

angular.module('rac.directives', []);
angular.module('rac.controllers', []);
angular.module('rac.services', []);
angular.module('rac.filters', []);

angular
  .module('rac', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mwl.calendar',
    'rac.directives',
    'rac.filters'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
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
        controller: 'BlogCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
