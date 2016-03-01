 'use strict';

angular.module('jhipstertokenApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipstertokenApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipstertokenApp-params')});
                }
                return response;
            },
        };
    });