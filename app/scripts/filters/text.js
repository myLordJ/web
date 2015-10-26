'use strict';

angular.module('rac.filters')
  .filter('text', function () {
    return function (text) {
      return text.replace(/<(.|\n)*?>/g, '');
    };
  });
