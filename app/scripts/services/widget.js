'use strict';
angular.module('rac')
  .factory('$widget', function($resource) {
    return $resource('http://localhost:3000/api/widget', {}, 
      { 
        get: { 
          method: 'GET', 
          isArray: true
        }
    });
  });