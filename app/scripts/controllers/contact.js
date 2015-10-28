'use strict';

angular.module('rac')
  .controller('ContactCtrl', function ($scope) {
    $scope.title = 'Contactanos';
    $scope.map = { 
      center: { latitude: -34.5776996, longitude: -58.46083050000004 }, 
      zoom: 16
    };

    $scope.marker = {
      key: 'rac',
      location: { latitude: -34.5776996, longitude: -58.46083050000004 }, 
    };
  });
