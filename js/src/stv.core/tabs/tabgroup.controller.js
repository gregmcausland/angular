(function() {
    'use strict';

    angular
        .module('stv.core.tabs')
        .controller('TabGroupController', TabGroupController);

    /* @ngInject */
    function TabGroupController( logger ) {
        var vm = this;

        vm.addPane  = addPane;
        vm.show     = show;
        
        vm.panes = [];

        function show( pane ) {
            vm.panes.forEach((pane) => pane.selected = false);
            pane.selected = true;
        }

        function addPane( pane ) {
            if ( !vm.panes.length ) pane.selected = true;
            vm.panes.push( pane );
        }
    }

})();