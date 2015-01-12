(function() {
    'use strict';

    angular
        .module('stv.core')
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