'use strict';

angular.module('rac.directives')
.directive('slider', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.slider,function(newValue, oldValue) {
        if (newValue && newValue.length) {
          element.flexslider({
            directionNav: false
          });
        }
      });
    }
  };
});