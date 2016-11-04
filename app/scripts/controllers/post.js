'use strict';

angular.module('rac')
  .controller('PostCtrl', function ($location, $current, $window) {

    this.post = $current.post;
    
    if (!this.post) {
      //TODO: If no post in memory request it to server.
      $location.path('/blog');
    }
    else {
      this.post.url = $window.location.href;
    }
  });
