'use strict';

angular.module('rac')
  .factory('$show', function($resource, API_URL) {
    return $resource(API_URL + '/show', {}, { 
      get: { 
        method: 'GET', 
        isArray: true
      }
    });
  })
  .factory('$currentShow', function($resource, API_URL) {
    return $resource(API_URL + '/show/current', {}, { 
      get: { 
        method: 'GET'
      }
    });
  });