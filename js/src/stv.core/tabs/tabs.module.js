(function() {
	'use strict';

	angular
		.module('stv.core.tabs', [])
		.run(run);

	/* @ngInject */
	function run( logger ) {
		logger.log('Adding tabs');
	}

})();