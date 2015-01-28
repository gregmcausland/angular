(function() {
	'use strict';

	angular
		.module('stv.core.tabs')
		.directive('tabPane', tabpane);

	/* @ngInject */
	function tabpane() {
		var directive = {
			restrict: 'EA',
			link: link,
			templateUrl: 'js/src/stv.core/tabs/tabpane.directive.html',
			transclude: true,
			replace: true,
			require: '^tabGroup',
			scope: {
				title: '@'
			}
		}

		return directive;

		function link( scope, element, attrs, tabCtrl ) {
			tabCtrl.addPane( scope );
		}
	}

})();