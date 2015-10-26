'use strict';

angular.module('rac')
  .factory('$post', function($resource) {
    return $resource('http://localhost:3000/api/post/?skip=:skip', {}, { 
        get: { 
          method: 'GET', 
          isArray: true
        }
    });
  });