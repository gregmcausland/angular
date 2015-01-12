(function() {
    'use strict';

    angular
        .module('stv.core')
        .directive('stvTabLink', stvTabLink);

    /* @ngInject */
    function stvTabLink( logger ) {
        var directive = {
            require: '^stvTabGroup',
            restrict: 'EA',
            link: link
        };
        return directive;

        function link(scope, element, attrs, controller) {
            var index = controller.getLinkIndex();

            scope.tabs.index = scope.tabs.index || 0;

            element.on('click', function() {
                scope.tabs.index = index;
                scope.$apply();
            });

            scope.$watch( 'index', function() {
                if ( scope.tabs.index ===  index ) {
                    element.addClass('is-active');
                } else {
                    element.removeClass('is-active');
                }
            });
        }
    };

})();
