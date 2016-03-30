'use strict';

angular.module('rac.filters')
  .filter('orderByTime', function () {
    function getOrder(item) {
      if (item.monday) {
        return parseInt(1 + item.mondayStartTime.toString());
      }

      if (item.tuesday) {
        return parseInt(2 + item.tuesdayStartTime.toString());
      }

      if (item.wednesday) {
        return parseInt(3 + item.wednesdayStartTime.toString());
      }

      if (item.thursday) {
        return parseInt(4 + item.thursdayStartTime.toString());
      }

      if (item.friday) {
        return parseInt(5 + item.fridayStartTime.toString());
      }

      if (item.saturday) {
        return parseInt(6 + item.saturdayStartTime.toString());
      }

      if (item.sunday) {
        return parseInt(7 + item.sundayStartTime.toString());
      }
    }

    return function(items) {
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
