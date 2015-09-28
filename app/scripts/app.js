'use strict';

/**
 * @ngdoc overview
 * @name webAppApp
 * @description
 * # webAppApp
 *
 * Main module of the application.
 */
angular
  .module('webAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
