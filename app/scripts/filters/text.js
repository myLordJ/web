'use strict';

angular.module('rac.filters')
  .filter('text', function () {
    return function (text) {
      if (!text) {
        return '';
      }

      return text.replace(/<(.|\n)*?>/g, '');
    };
  });
