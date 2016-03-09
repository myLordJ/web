'use strict';

angular.module('rac.directives')
.directive('script', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.html(attrs.script);
    }
  };
});