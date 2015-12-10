'use strict';

angular.module('rac')
  .controller('AboutCtrl', function ($scope, $sce, $page, $gallery) {
    $scope.title = 'Nosotros';

    $page.get({name: 'about'}, function(page) {
      $scope.content = $sce.trustAsHtml(page.content);
      $scope.title = page.title;
      $scope.subTitle = page.subTitle;
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
