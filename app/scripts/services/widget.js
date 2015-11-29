'use strict';
angular.module('rac')
  .factory('$widget', function($resource, API_URL) {
    return $resource(API_URL + '/widget', {}, 
      { 
        get: { 
          method: 'GET', 
          isArray: true
        }
    });
  });