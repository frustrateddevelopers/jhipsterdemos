 'use strict';

angular.module('jhipsteroauth2App')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipsteroauth2App-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipsteroauth2App-params')});
                }
                return response;
            },
        };
    });