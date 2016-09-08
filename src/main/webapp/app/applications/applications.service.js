(function() {
    'use strict';

    angular
        .module('PaybotsRegistryApp')
        .factory('ApplicationsService', ApplicationsService);

    ApplicationsService.$inject = ['$resource'];

    function ApplicationsService ($resource) {
        var service = $resource('api/eureka/applications', {}, {
            'get': { method: 'GET'}
        });

        return service;
    }
})();
