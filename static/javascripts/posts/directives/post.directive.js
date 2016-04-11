/**
 * Post
 * @namespace philosymbol.posts.directives
 */
(function () {
  'use strict';

  angular
    .module('philosymbol.posts.directives')
    .directive('post', post);

  /**
   * @namespace Post
   */
  function post() {
    /**
     * @name directive
     * @desc The directive to be returned
     */
    var directive = {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: '/static/templates/posts/post.html'
    };

    return directive;
  }
})();
