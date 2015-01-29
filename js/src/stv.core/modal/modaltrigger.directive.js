(function() {
	'use strict';

	angular
		.module('stv.core.modal')
		.directive('modalTrigger', modalTrigger);

	/* @ngInject */
	function modalTrigger( logger ) {
		var directive = {
			restrict: 'EA',
			template: '<span ng-click="vm.show()" ng-transclude></span>',
			transclude: true,
			require: '^modal'
		}

		return directive;
	}

})();