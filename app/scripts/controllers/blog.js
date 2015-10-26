'use strict';

angular.module('rac')
.controller('BlogCtrl', function ($scope, $post) {
  $scope.posts = [];
  var skip = 0;
  var endOfBlogs = false;

  $scope.getPosts = function() {
    if (!endOfBlogs) {
      $post.get({skip: skip}, function(posts) {
        if (posts && posts.length > 0) {
          $scope.posts.push(posts[0]);
          if (posts[1]) {
            $scope.posts.push(posts[1]);
          }
          skip += 2;
        }
        else {
          endOfBlogs = true;
        }
      });
    }
  };

  $scope.getPosts();

});
