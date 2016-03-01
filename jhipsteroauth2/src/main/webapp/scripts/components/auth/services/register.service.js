'use strict';

angular.module('jhipsteroauth2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


