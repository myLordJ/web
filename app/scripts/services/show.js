'use strict';

angular.module('rac')
  .factory('$show', function($resource) {
    return $resource('http://localhost:3000/api/show', {}, { 
      get: { 
        method: 'GET', 
        isArray: true
      }
    });
  })
  .factory('$currentShow', function($resource) {
    return $resource('http://localhost:3000/api/show/current', {}, { 
      get: { 
        method: 'GET'
      }
    });
  });