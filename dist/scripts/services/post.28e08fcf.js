'use strict';

angular.module('rac')
  .factory('$post', function($resource, API_URL) {
    return $resource(API_URL + '/post/?skip=:skip', {}, { 
        get: { 
          method: 'GET', 
          isArray: true
        }
    });
  });