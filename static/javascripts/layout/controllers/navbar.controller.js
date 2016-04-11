/*
 * @namespace philosymbol.layout.controllers
 */
(function () {
  'use strict';

  angular
    .module('philosymbol.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
   * @namespace NavbarController
   */
  function NavbarController($scope, Authentication) {
    var vm = this;

    vm.logout = logout;

    /**
     * @name logout
     * @desc Log the user out
     */
    function logout() {
      Authentication.logout();
    }
  }
})();
