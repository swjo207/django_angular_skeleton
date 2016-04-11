(function(){
  'use strict';

  angular.module('philosymbol', [
                 'philosymbol.config',
                 'philosymbol.routes',
                 'philosymbol.accounts',
                 'philosymbol.authentication',
                 'philosymbol.layout',
                 'philosymbol.posts',
                 'philosymbol.utils'
                 ]);

  angular.module('philosymbol.config', []);

  angular.module('philosymbol.routes', ['ngRoute']);

  angular.module('philosymbol').run(run);

  run.$inject = ['$http'];

  /*
   * @name run
   * @desc update xsrf $http headers to align with django default
   */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();
