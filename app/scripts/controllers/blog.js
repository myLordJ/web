'use strict';

angular.module('rac')
.controller('BlogCtrl', function ($scope, $rootScope, $post, $page, $sce, $location, $current) {
  var skip = 0;
  var pageSize = 3;
  $scope.endOfBlogs = false;

  $scope.posts = [];
  $rootScope.title = 'Entrevistas';

  $page.get({name: 'blog'}, function(page){
    $rootScope.title = page.title;
    $rootScope.subTitle = page.subTitle;
    $scope.content = $sce.trustAsHtml(page.content);
  });

  $scope.goToPost = function(index) {
    $current.post = this.posts[index];
    $location.path('/blog/' + $current.post.title);
  };

  $scope.getPosts = function() {
    if (!$scope.endOfBlogs) {
      $scope.loadedImages = false;
      $post.get({skip: skip}, function(posts) {
        if (posts && posts.length > 0) {
          for (var i = posts.length - 1; i >= 0; i--) { 
            posts[i].content.extended = $sce.trustAsHtml(posts[i].content.extended);
          }

          $scope.posts = $scope.posts.concat(posts);
          $scope.loadedImages = true;
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
