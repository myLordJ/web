'use strict';
angular.module('rac')
  .factory('$gallery', function($resource) {
    return $resource('http://localhost:3000/api/gallery/:name', {}, 
      { 
        get: { 
          method: 'GET', 
          isArray: true
        }
    });
  });