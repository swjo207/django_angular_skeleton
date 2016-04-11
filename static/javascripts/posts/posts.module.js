(function () {
  'use strict';

  angular
    .module('philosymbol.posts', [
      'philosymbol.posts.controllers',
      'philosymbol.posts.directives',
      'philosymbol.posts.services'
    ]);

  angular
    .module('philosymbol.posts.controllers', []);

  angular
    .module('philosymbol.posts.directives', ['ngDialog']);

  angular
    .module('philosymbol.posts.services', []);
})();
