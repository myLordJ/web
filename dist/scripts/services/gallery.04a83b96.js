'use strict';
angular.module('rac')
  .factory('$gallery', function($resource, API_URL) {
    return $resource(API_URL + '/gallery/:name', {}, 
      { 
        get: { 
          method: 'GET', 
          isArray: true
        }
    });
  });