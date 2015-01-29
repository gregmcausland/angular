(function() {
	'use strict';

	angular
		.module('stv.core.modal')
		.controller('ModalController', ModalController);

	/* @ngInject */
	function ModalController( logger ) {
		var vm = this;

		vm.setContent 	= setContent;
		vm.show			= show;
		vm.hide			= hide;
		
		function setContent( content ) {
			vm.content = content;
		}

		function show() {
			vm.content.active = true;
		}

		function hide() {
			vm.content.active = false;
		}
	}

})();