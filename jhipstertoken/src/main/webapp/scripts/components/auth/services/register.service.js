'use strict';

angular.module('jhipstertokenApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


