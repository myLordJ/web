'use strict';

angular.module('rac.directives')
.directive('infiniteScroll', function ($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind('scroll', function() {
      if ($(window).scrollTop() === $(document).height() - $(window).height()) {
      //if($(element).scrollTop() + $(element).innerHeight() >= $(element)[0].scrollHeight){
        scope.$apply(attrs.infiniteScroll);
      }
    });
  };
});
