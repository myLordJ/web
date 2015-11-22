'use strict';

angular.module('rac')
  .factory('$current', function() {
    var post, show;

    return {
      post: post,
      show: show
    };
  });