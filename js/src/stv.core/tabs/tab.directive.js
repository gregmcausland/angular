(function() {
    'use strict';

    angular
        .module('stv.core.tab')
        .directive('stvTab', stvTab);

    /* @ngInject */
    function stvTab( logger ) {
        var directive = {
            require: '^stvTabGroup',
            restrict: 'EA',
            link: link
        };
        return directive;

        function link(scope, element, attrs, controller) {
            var index = controller.getBodyIndex();

            scope.$watch( 'tabs.index', function() {
                if ( scope.tabs.index ===  index ) {
                    element.addClass('is-active');
                } else {
                    element.removeClass('is-active');
                }
            });
        }
    };

})();
