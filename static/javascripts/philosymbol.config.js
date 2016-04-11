(function(){
  'use strict';

  angular.module('philosymbol.config').config(config);
  config.$inject = ['$locationProvider'];

  /*
   * @name config
   * @desc enable html5 routing
   */

  function config($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }

})();
