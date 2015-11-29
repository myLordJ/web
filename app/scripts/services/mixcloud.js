'use strict';

angular.module('rac')
  .factory('$mixcloud', function($resource) {
    return $resource('https://api.mixcloud.com/radioalacalle/cloudcasts?callback=callbackfn', { callback: 'JSON_CALLBACK' }, {
      get: {
        method: 'JSONP'
      }
    });
  });