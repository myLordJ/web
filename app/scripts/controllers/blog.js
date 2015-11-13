'use strict';

angular.module('rac')
.controller('BlogCtrl', function ($scope, $post, $page, $sce, $location, $current) {
  var skip = 0;
  $scope.endOfBlogs = false;

  $scope.posts = [];
  $scope.title = 'Blog';

  $page.get({name: 'blog'}, function(page){
    $scope.title = page.title;
    $scope.content = $sce.trustAsHtml(page.content);
  });

  $scope.goToPost = function(index) {
    $current.post = this.posts[index];
    $location.path('/blog/' + $current.post.title);
  };

  $scope.getPosts = function() {
    if (!$scope.endOfBlogs) {
      $post.get({skip: skip}, function(posts) {
        if (posts && posts.length > 0) {
          $scope.posts.push(posts[0]);
          if (posts[1]) {
            $scope.posts.push(posts[1]);
          }
          skip += 2;
        }
        else {
          $scope.endOfBlogs = true;
        }
      });
    }
  };

  $scope.getPosts();

});
