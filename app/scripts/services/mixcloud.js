'use strict';

angular.module('rac')
  .factory('mixcloud', function($resource) {
    return $resource(' http://api.mixcloud.com/search/?q=radio+a+la+calle&type=cloudcast');
  });