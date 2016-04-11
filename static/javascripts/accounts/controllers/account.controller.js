/**
* AccountController
* @namespace philosymbol.accounts.controllers
*/
(function () {
  'use strict';

  angular
    .module('philosymbol.accounts.controllers')
    .controller('AccountController', AccountController);

  AccountController.$inject = ['$location', '$routeParams', 'Posts', 'Account'];

  /**
  * @namespace AccountController
  */
  function AccountController($location, $routeParams, Posts, Account) {
    var vm = this;

    vm.account = undefined;
    vm.posts = [];

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    */
    function activate() {
      alert($routeParams.username);
      var username = $routeParams.username.substr(1);
      console.error('AccountController'+username);

      Account.get(username).then(accountSuccessFn, accountErrorFn);
      Posts.get(username).then(postsSuccessFn, postsErrorFn);

      /**
      * @name accountSuccessAccount
      * @desc Update `account` on viewmodel
      */
      function accountSuccessFn(data, status, headers, config) {
        vm.account = data.data.email;
      }


      /**
      * @name accountErrorFn
      * @desc Redirect to index and show error Snackbar
      */
      function accountErrorFn(data, status, headers, config) {
        $location.url('/');
        window.alert('That user does not exist.');
      }


      /**
        * @name postsSucessFn
        * @desc Update `posts` on viewmodel
        */
      function postsSuccessFn(data, status, headers, config) {
        vm.posts = data.data;
      }


      /**
        * @name postsErrorFn
        * @desc Show error snackbar
        */
      function postsErrorFn(data, status, headers, config) {
        window.alert(data.data.error);
      }
    }
  }
})();
