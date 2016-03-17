'use strict';

angular.module('rac.filters')
  .filter('ellipsis', function () {
    return function (text) {
      if (!text) {
        return '';
      }

      return text.length > 150 ? text.substring(0, 148) + '...' : text;
    };
  });
