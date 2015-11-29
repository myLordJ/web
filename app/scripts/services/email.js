'use strict';
angular.module('rac')
  .factory('$email', function($resource, API_URL) {
    return $resource(API_URL + '/email/:from', { from: '@from' }, {
      save: { 
        method: 'POST', 
        isArray: true
      }
    });
  });