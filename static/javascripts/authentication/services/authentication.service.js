/**
 * Authentication
 * @namespace philosymbol.authentication.services
 */

(function() {
  'use strict';

  angular.module('philosymbol.authentication.services').factory('Authentication', Authentication);

  Authentication.$inject = ['$cookies', '$http'];

  /*
   * @namespace Authentication
   * @returns {Factory}
   */
  function Authentication($cookies, $http) {

    /*
     * @name Authentication
     * @desc the factory to be returned
     */
    var Authentication = {
      getAuthenticatedAccount: getAuthenticatedAccount,
      isAuthenticated: isAuthenticated,
      login: login,
      logout: logout,
      register: register,
      setAuthenticated: setAuthenticated,
      unauthenticate: unauthenticate
    };
    return Authentication;
    /*
     * @name getAuthenticatedAccount
     * @desc return the current authenticated account
     * @returns {object|undefined} Account if authenticated, else `undefined`
     *
     */
    function getAuthenticatedAccount() {
      if (!$cookies.authenticatedAccount) {
        return;
      }
      return JSON.parse($cookies.authenticatedAccount);
    }

    /*
     * @name isAuthenticated
     * @desc check if the current user is authenticated
     * @returns {boolean} Ture if user is authenticated, else False
     */
    function isAuthenticated() {
      return !!$cookies.token;
    }

    /*
     * @name login
     * @desc try to log in with email `email` and password `password`
     * @param {string} email the email entered by the user
     * @param {string} password the password entered by the user
     * @returns {Promise}
     */
    function login(email, password) {
      var auth = this;
      return $http.post('/api/v1/auth/login/', {
        email: email, password: password
      }).then(loginSuccessFn, loginErrorFn);

      /*
       * @name loginSuccessFn
       * @desc set the authenticated account and redirect to index
       */
      function loginSuccessFn(data, status, headers, config) {
        $cookies.token = data.data.key;
        $cookies.authenticatedAccount = email;
        setAuthenticated();
        window.location = '/';
      }
      /*
       * @name loginErrorFn
       * @desc log 'failure' to the console
       */
      function loginErrorFn(data, status, headers, config) {
        console.error('login failed...');
      }
    }
    /*
     * @name logout
     * @desc try to log the user out
     * @returns {Promise}
     */
    function logout() {
      var auth = this;
      return $http.post('/api/v1/auth/logout/').then(logoutSuccessFn, logoutErrorFn);
      /*
       * @name logoutSuccessFn
       * @desc unauthenticated and redirect to index with page reload
       */
      function logoutSuccessFn(data, status, headers, config) {
        Authentication.unauthenticate();
        window.location = '/';
      }
      /*
       * @name logoutErrorFn
       * @desc log 'failure' to the console
       */
      function logoutErrorFn(data, status, headers, config) {
        console.error('logout failed...');
      }
    }

    /*
     * @name register
     * @desc try to register a new user
     * @param {string} username
     * @param {string} password
     * @param {string} email
     * @returns {Promise}
     */
    function register(email, password, username) {
      return $http.post('/api/v1/accounts/registration/', {
        username: username,
        password1: password,
        password2: password,
        email: email
      }).then(registerSuccessFn, registerErrorFn);

      /**
      * @name registerSuccessFn
      * @desc Log the new user in
      */
      function registerSuccessFn(data, status, headers, config) {
        Authentication.login(email, password);
      }

      /**
      * @name registerErrorFn
      * @desc log "failure!" to the console
      */
      function registerErrorFn(data, status, headers, config) {
        console.error('register failure!');
      }
    }
    /**
     * @name setAuthenticatedUser
     * @desc Stringify the account object and store it in a cookie
     * @param {Object} account The acount object to be stored
     * @returns {undefined}
     */
    function setAuthenticated() {

    }


    /**
     * @name unauthenticate
     * @desc Delete the cookie where the account object is stored
     * @returns {undefined}
     */
    function unauthenticate() {
      delete $cookies.authenticatedAccount;
      delete $cookies.token;
    }
  }

})();
