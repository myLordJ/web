'use strict';

angular.module('rac')
.controller('BlogCtrl', function ($scope, $rootScope, $post, $page, $sce, $location, $current) {
  var skip = 0;
  var pageSize = 3;
  $scope.endOfBlogs = false;

  $scope.posts = [];
  $rootScope.title = 'Notas';

  $rootScope.underConstruction = true;

  $page.get({name: 'blog'}, function(page){
    $rootScope.title = page.title;
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
          $scope.posts = $scope.posts.concat(posts);
          skip += pageSize;
        }
        else {
          $scope.endOfBlogs = true;
        }
      });
    }
  };

  $scope.getPosts();

});
