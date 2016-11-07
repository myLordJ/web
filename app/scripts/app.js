'use strict';

angular.module('rac.directives', []);
angular.module('rac.controllers', []);
angular.module('rac.services', []);
angular.module('rac.filters', []);

angular
  .module('rac', [
    'ngResource',
    'ngRoute',
    'uiGmapgoogle-maps',
    // 'mwl.calendar',
    'rac.directives',
    'rac.filters',
    // 'angularUtils.directives.dirDisqus'
  ])
  .constant('API_URL', window.location.href.indexOf('localhost') === -1 ? 'https://rac-dashboard.herokuapp.com/api' : 'http://localhost:3000/api')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs:'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/live', {
        templateUrl: 'views/live.html',
        controller: 'LiveCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl',
        controllerAs: 'schedule'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/blog/:title', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      })
      .when('/show/:title', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl',
        controllerAs: 'show'
      })
      .otherwise({
        redirectTo: '/'
      });

      //$locationProvider.html5Mode(true);
  });
