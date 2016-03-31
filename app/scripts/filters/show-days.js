'use strict';

angular.module('rac.filters')
  .filter('showDays', function () {
    return function (show) {
      var result = [];
      var time;

      function formatTime(from, to) {
        from = from.toString();
        to = to.toString();
        from = from === '0' ? '00:00' : from.substring(0, 2) + ':' + from.substring(2, 4);
        to = to === '0'? '00:00' : to.substring(0, 2) + ':' + to.substring(2, 4);
        return  from + ' - ' + to;
      }

      if (show.monday) {
        time = formatTime(show.mondayStartTime, show.mondayEndTime);
        result.push('LUN: ' + time);
      }

      if (show.tuesday) {
        time = formatTime(show.tuesdayStartTime, show.tuesdayEndTime);
        result.push('MAR: ' + time);
      }

      if (show.wednesday) {
        time = formatTime(show.wednesdayStartTime, show.wednesdayEndTime);
        result.push('MIE: ' + time);
      }

      if (show.thursday) {
        time = formatTime(show.thursdayStartTime, show.thursdayEndTime);
        result.push('JUE: ' + time);
      }

      if (show.friday) {
        time = formatTime(show.fridayStartTime, show.fridayEndTime);
        result.push('VIE: ' + time);
      }

      if (show.saturday) {
        time = formatTime(show.saturdayStartTime, show.saturdayEndTime);
        result.push('SAB: ' + time);
      }

      if (show.sunday) {
        time = formatTime(show.sundayStartTime, show.sundayEndTime);
        result.push('DOM:     ' + time);
      }

      return result.join(' - ');
    };
  });
