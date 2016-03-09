'use strict';

angular.module('rac.directives')
.directive('mobileMenu', function () {
  return {
    restrict: 'A',
    link: function (scope, element) {
      $(element).mmenu({
        slidingSubmenus: false,
        counters: false,
        classes: 'mm-slide  mm-white',
        footer: {
          add: true,
          title: 'Matrix All Right Reserved 2015'
        },
        header: {
          title: 'Main Menu',
          add: true,
          update: true
        },

        searchfield: true
      });
      
    }
  };
});