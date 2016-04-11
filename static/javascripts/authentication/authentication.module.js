(function(){
  'use strict';

  angular.module('philosymbol.authentication', [
                 'philosymbol.authentication.controllers',
                 'philosymbol.authentication.services'
                 ]);

  angular.module('philosymbol.authentication.controllers', []);

  angular.module('philosymbol.authentication.services', ['ngCookies']);
})();
