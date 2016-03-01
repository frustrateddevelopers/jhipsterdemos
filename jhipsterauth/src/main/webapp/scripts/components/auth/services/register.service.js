'use strict';

angular.module('jhipsterauthApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


