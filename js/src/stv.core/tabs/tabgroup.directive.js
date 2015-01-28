(function() {
	'use strict';

	angular
		.module('stv.core.tabs')
		.directive('tabGroup', tabgroup);

	/* @ngInject */
	function tabgroup() {
		var directive = {
			restrict: 'EA',
			templateUrl: 'js/src/stv.core/tabs/tabgroup.directive.html',
			controller: 'TabGroupController',
			controllerAs: 'vm',
			transclude: true,
			bindToController: true
		}

		return directive;
	}

})();