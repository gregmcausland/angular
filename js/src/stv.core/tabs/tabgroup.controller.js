(function() {
    'use strict';

    angular
        .module('stv.core.tabs')
        .controller('stvTabGroupController', stvTabGroupController);

    /* @ngInject */
    function stvTabGroupController( logger, $scope ) {
        var vm = this;

        $scope.tabs = {
            index: 0
        }

        vm.linkIndex = 0;
        vm.bodyIndex = 0;

        vm.getLinkIndex = function() {
            return vm.linkIndex++;
        };

        vm.getBodyIndex = function() {
            return vm.bodyIndex++;
        }
    };

})();
