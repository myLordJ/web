'use strict';

angular.module('rac.directives')
.directive('isFlash', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var isFlash = (attrs.isFlash === 'true');
      var isFashInstalled = ((typeof navigator.plugins !== 'undefined' && typeof navigator.plugins['Shockwave Flash'] === 'object') || (window.ActiveXObject && (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) !== false));
      
      if (isFashInstalled && isFlash) {
        $(element).show();
      }
      else {
        $(element).remove();
      }
    }
  };
});
