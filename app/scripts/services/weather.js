'use strict';
angular.module('rac')
  .factory('$weather', function($resource) {
    return $resource('https://api.forecast.io/forecast/858ac4baa2976206dd68f29cd8c28bbb/-34.6036844,-58.381559100000004', {}, 
      { 
        get: { 
          method: 'GET'
        }
    });
  });