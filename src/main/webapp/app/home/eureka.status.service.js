(function() {
    'use strict';

    angular
        .module('PaybotsRegistryApp')
        .factory('EurekaStatusService', EurekaStatusService);

    EurekaStatusService.$inject = ['$resource'];

    function EurekaStatusService ($resource) {
        var service = $resource('api/eureka/status', {}, {
            'get': { method: 'GET'}
        });

        return service;
    }
})();
