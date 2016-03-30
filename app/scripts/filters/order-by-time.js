'use strict';

angular.module('rac.filters')
  .filter('orderByTime', function (items) {
    function getOrder(item) {
      console.log(item);
    }

    return function() {
      var filtered = [];
      angular.forEach(items, function(item) {
        filtered.push(item);
      });
      filtered.sort(function (a, b) {    
        return (getOrder(a) > getOrder(b) ? 1 : -1);
      });
      
      return filtered;
    };
  });
