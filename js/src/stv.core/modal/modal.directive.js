(function() {
	'use strict';

	angular
		.module('stv.core.modal')
		.directive('modal', modal);

	/* @ngInject */
	function modal( logger ) {
		var directive = {
			restrict: 'EA',
			controller: 'ModalController',
			controllerAs: 'vm',
			bindToController: true
		}

		return directive;
	}

})();