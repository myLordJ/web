'use strict';

angular.module('rac.filters')
  .filter('showDays', function () {
    return function (show) {
      var result = [];
      if (show.monday) {
        result.push('LUN');
      }

      if (show.tuesday) {
        result.push('MAR');
      }

      if (show.wednesday) {
        result.push('MIE');
      }

      if (show.thursday) {
        result.push('JUE');
      }

      if (show.friday) {
        result.push('VIE');
      }

      if (show.saturday) {
        result.push('SAB');
      }

      if (show.sunday) {
        result.push('DOM');
      }

      return result.join(' - ');
    };
  });
