'use strict';

angular.module('jhipsterauthApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
