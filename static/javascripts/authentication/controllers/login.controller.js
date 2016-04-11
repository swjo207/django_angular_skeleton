/**
* LoginController
* @namespace philosymbol.authentication.controllers
*/
(function () {
  'use static';

  angular
    .module('philosymbol.authentication.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @namespace LoginController
  */
  function LoginController($location, $scope, Authentication) {
    var vm = this;

    vm.login = login;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    */
    function activate() {
      // If the user is authenticated, they should not be here.
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
    }

    /**
    * @name login
    * @desc log the user in
    */
    function login() {
      Authentication.login(vm.email, vm.password);
    }
  }
})();
