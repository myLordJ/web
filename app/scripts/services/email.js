'use strict';
angular.module('rac')
  .factory('$email', function($resource) {
    return $resource('http://localhost:3000/api/email/:from', { 
      from: '@from',
      // name: '@name',
      // message: '@message'
    }, {
      save: { 
        method: 'POST', 
        isArray: true
      }
    });
  });