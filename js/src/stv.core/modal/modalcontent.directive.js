(function() {
	'use strict';

	angular
		.module('stv.core.modal')
		.directive('modalContent', modalContent);

	/* @ngInject */
	function modalContent( logger ) {
		var directive = {
			restrict: 'EA',
			link: link,
			templateUrl: 'js/src/stv.core/modal/modalcontent.directive.html',
			transclude: true,
			replace: true,
			require: '^modal'
		}

		return directive;

		function link( scope, element, attrs, ModalCtrl ) {
			ModalCtrl.setContent( scope );
		}
	}

})();