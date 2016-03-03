'use strict';

angular.module('rac')
  .controller('AboutCtrl', function ($scope, $rootScope, $sce, $page, $gallery) {
    $rootScope.title = 'Nosotros';

    $page.get({name: 'about'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
      $rootScope.title = page.title;
      $rootScope.subTitle = page.subTitle;
    });

    $gallery.get({name: 'workspace'}, function(gallery) {
      $scope.images = gallery;
    });

    $scope.users = [
      {name: 'Juan Gnarra', job: 'CEO', twitter: '#', facebook: '#', profilePicture: '../new/images/team-1.jpg'},
      {name: 'Agustin Peyloubet', job: 'COO', twitter: '#', facebook: '#', profilePicture: '../new/images/team-1.jpg'},
      {name: 'El Jota', job: 'CTO', twitter: '#', facebook: '#', profilePicture: '../new/images/team-1.jpg'}
    ];
  });
