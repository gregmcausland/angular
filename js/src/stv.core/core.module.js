(function() {
	'use strict';

	angular
		.module('stv.core', [
			'stv.core.polyfills', 
			'stv.core.registration',
			'stv.core.tabs',
			'stv.core.modal',
			'stv.core.tmpl'
		]);

})();