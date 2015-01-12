(function() {
    'use strict';

    angular
        .module('stv.core.tabs')
        .directive('stvTabGroup', stvTabGroup);

    /* @ngInject */
    function stvTabGroup( logger ) {
        var directive = {
            restrict: 'EA',
            controller: 'stvTabGroupController',
            controllerAs: 'vm',
            scope: true
        };
        return directive;
    };

})();