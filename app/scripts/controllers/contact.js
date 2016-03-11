'use strict';

angular.module('rac')
  .controller('ContactCtrl', function ($scope, $rootScope, $page, $email, $sce) {
    $rootScope.title = 'Contactanos';
    $scope.isSending = false;
    $scope.email = {};

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
      $rootScope.title = page.title;
      $rootScope.subTitle = page.subTitle;
    });

    $scope.sendEmail = function() {
      if ($scope.emailForm.$valid) {
        $scope.isSending = true;
        $email.save({
          from: $scope.email.from,
          message: $scope.email.message,
          name: $scope.email.name
        }, function() {
          $scope.isSending = false;

          $scope.alert = {
            message: $scope.email.name + ', gracias por escribirnos, nos pondremos en contacto a la brevedad.' ,
            type: 'success'
          };

          $scope.email = {};
        });
      }
    };
  });
