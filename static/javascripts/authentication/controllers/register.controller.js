/**
 * register controller
 * @namespace philosymbol.authentication.controllers
 */

(function(){
  'use strict';

  angular.module('philosymbol.authentication.controllers').controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  /*
   * @namespace RegisterController
   */
  function RegisterController($location, $scope, Authentication) {
    var vm = this;

    vm.register = register;

    activate();
    /*
     * @name activate
     * @desc actions to be performed when this controller is instantiated.
     */
    function activate() {
      // if user is authenticated, they should not be here
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
    }
    /*
     * @name register
     * @desc register a new user
     * @
     */
    function register() {
      Authentication.register(vm.email, vm.password, vm.username);
    }
  }
})();
