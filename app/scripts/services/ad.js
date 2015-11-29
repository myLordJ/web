'use strict';
angular.module('rac')
  .factory('$ad', function($resource, API_URL) {
    return $resource(API_URL + '/ad', {}, 
      { 
        get: { 
          method: 'GET', 
          isArray: true
        }
    });
  });