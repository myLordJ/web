'use strict';

angular.module('rac')
.controller('BlogCtrl', function ($rootScope, $post, $page, $sce, $location, $current) {
  var _this = this;

  var skip = 0;
  var pageSize = 3;
  var isLoading = false;
  this.endOfBlogs = false;

  this.posts = [];
  $rootScope.title = 'Entrevistas';

  $page.get({name: 'blog'}, function(page){
    $rootScope.title = page.title;
    $rootScope.subTitle = page.subTitle;
    _this.content = $sce.trustAsHtml(page.content);
  });

  this.goToPost = function(index) {
    $current.post = this.posts[index];
    $location.path('/blog/' + $current.post.title);
  };

  this.getPosts = function() {
    if (!this.endOfBlogs || isLoading) {
      isLoading = true;

      this.loadedImages = false;
      $post.get({skip: skip}, function(posts) {
        if (posts && posts.length > 0) {
          for (var i = posts.length - 1; i >= 0; i--) { 
            posts[i].content.extended = $sce.trustAsHtml(posts[i].content.extended);
          }

          _this.posts = _this.posts.concat(posts);
          _this.loadedImages = true;
          skip += pageSize;
        }
        else {
          this.endOfBlogs = true;
        }

        isLoading = false;
      }, function() {
          isLoading = false;
      });
    }
  };

  this.getPosts();

});
