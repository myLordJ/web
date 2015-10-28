'use strict';

angular.module('rac')
  .controller('ContactCtrl', function ($scope, $page, $email, $sce) {
    $scope.title = 'Contactanos';

    $scope.map = { 
      center: { latitude: -34.5776996, longitude: -58.46083050000004 }, 
      zoom: 16,
      options: {
        panControl: false,
        rotateControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        mapTypeControl: false
      }
    };

    $scope.marker = {
      key: 'rac',
      location: { latitude: -34.5776996, longitude: -58.46083050000004 }, 
    };

    $page.get({name: 'contact'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
      $scope.title = page.title;
    });

    $scope.sendEmail = function() {
      $email.save({
        from: $scope.from,
        message: $scope.message,
        name: $scope.name
      }, function() {
        $scope.alert = {
          msg: 'Mensaje Enviado',
          type: 'success'
        };
      });
    };
  });
