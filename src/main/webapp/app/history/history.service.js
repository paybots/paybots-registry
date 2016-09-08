(function() {
    'use strict';

    angular
        .module('PaybotsRegistryApp')
        .factory('HistoryService', HistoryService);

    HistoryService.$inject = ['$resource'];

    function HistoryService ($resource) {
        var service = $resource('api/eureka/lastn', {}, {
            'get': { method: 'GET'}
        });

        return service;
    }
})();
