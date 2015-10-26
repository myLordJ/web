'use strict';

angular.module('rac')
  .factory('$page', function($resource) {
    return $resource('http://localhost:3000/api/page/:id');
  });