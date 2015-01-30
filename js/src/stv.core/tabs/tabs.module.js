(function() {
	'use strict';

	angular
		.module('stv.core.tabs', ['stv.core.tmpl'])
		.run(run);

	/* @ngInject */
	function run( logger ) {
		logger.log('Adding tabs');
	}

})();