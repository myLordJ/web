'use strict';

angular.module('rac')
  .factory('$page', function($resource, API_URL) {
    return $resource(API_URL + '/page/:name');
  });