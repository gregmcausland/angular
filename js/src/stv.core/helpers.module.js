(function() {
	'use strict';

	angular
		.module('stv.core.helpers', [])
		.run(run);

	/* @ngInject */
	function run( $logger ) {
		$logger.log('Adding helpers');
	}

})();