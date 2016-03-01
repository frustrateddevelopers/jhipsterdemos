 'use strict';

angular.module('jhipsterauthApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipsterauthApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipsterauthApp-params')});
                }
                return response;
            },
        };
    });