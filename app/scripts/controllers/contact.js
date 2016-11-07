'use strict';

angular.module('rac')
  .controller('ContactCtrl', function ($rootScope, $page, $email, $sce) {
    var _this = this;

    $rootScope.title = 'Contactanos';
    this.isSending = false;
    this.email = {};

    this.map = { 
      center: { latitude: -34.5776996, longitude: -58.46083050000004 }, 
      zoom: 16,
      options: {
        panControl: false,
        rotateControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scrollwheel: false
      }
    };

    this.marker = {
      key: 'rac',
      location: { latitude: -34.5776996, longitude: -58.46083050000004 }, 
    };

    $page.get({name: 'contact'}, function(page) {
      _this.content = $sce.trustAsHtml(page.content);
      $rootScope.title = page.title;
      $rootScope.subTitle = page.subTitle;
    });

    this.sendEmail = function() {
      if (this.emailForm.$valid && this.email.captcha === 5) {
        _this.isSending = true;
        $email.save({
          from: _this.email.from,
          message: _this.email.message,
          name: _this.email.name
        }, function() {
          _this.isSending = false;

          _this.alert = {
            message: _this.email.name + ', gracias por escribirnos, nos pondremos en contacto a la brevedad.' ,
            type: 'success'
          };

          _this.email = {};
        });
      }
    };
  });
