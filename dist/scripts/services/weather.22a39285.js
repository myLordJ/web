'use strict';
angular.module('rac')
  .factory('$weather', function($resource, API_URL) {
    return $resource(API_URL + '/weather', {}, 
      { 
        get: { 
          method: 'GET'
        }
    });
  });