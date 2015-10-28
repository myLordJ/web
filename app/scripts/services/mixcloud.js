'use strict';

angular.module('rac')
  .factory('$mixcloud', function($resource) {
    return $resource('http://api.mixcloud.com/radioalacalle/cloudcasts?callback=callbackfn', { callback: 'JSON_CALLBACK' }, {
      get: {
        method: 'JSONP'
      }
    });
  });