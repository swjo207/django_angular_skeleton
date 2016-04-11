/*
 * IndexController
 * @namespace philosymbol.layout.controllers
 */
(function() {
  'use strict';

  angular.module('philosymbol.layout.controllers').controller('IndexController',IndexController);

  IndexController.$inject = ['$scope', 'Authentication', 'Posts', 'Snackbar'];

  /*
   * @namespace IndexController
   */
  function IndexController($scope, Authentication, Posts, Snackbar) {
    var vm = this;

    vm.isAuthenticated = Authentication.isAuthenticated();
    vm.posts = [];

    activate();

    /*
     * @name activate
     * @desc actions to be performed when this controller is instantiated.
     */
    function activate() {
      //Posts.all().then(postsSuccessFn, postsErrorFn);
      $scope.$on('post.created', function (event, post) {
        vm.posts.unshift(post);
      });

      $scope.$on('post.created.error', function() {
        vm.posts.shift();
      });

      function postsSuccessFn(data, status, headers, config) {
        vm.posts = data.data;
      }
      function postsErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }
  }

})();
