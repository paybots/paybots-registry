(function() {
    'use strict';

    angular
        .module('PaybotsRegistryApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('history', {
            parent: 'app',
            url: '/history',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'History'
            },
            views: {
                'content@': {
                    templateUrl: 'app/history/history.html',
                    controller: 'HistoryController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();