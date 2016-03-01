'use strict';

angular.module('jhipsteroauth2App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
