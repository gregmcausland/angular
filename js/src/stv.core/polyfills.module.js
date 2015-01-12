(function() {
	'use strict';

	angular
		.module('stv.core.polyfills', [])
		.run(run);

	/* @ngInject */
	function run( logger ) {
		logger.log('Adding polyfills');
	}

})();