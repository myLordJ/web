'use strict';

angular.module('rac')
.factory('gallery', function($resource) {
  return $resource('http://localhost:3000/api/gallery/:key');
});