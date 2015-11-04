'use strict';
angular.module('rac')
  .factory('$ad', function($resource) {
    return $resource('http://localhost:3000/api/ad', {}, 
      { 
        get: { 
          method: 'GET', 
          isArray: true
        }
    });
  });