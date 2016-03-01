'use strict';

angular.module('jhipstertokenApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
