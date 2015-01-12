(function() {
	'use strict';

	angular
		.module('stv.core.registration', [])
		.run(run);

	/* @ngInject */
	function run( $logger ) {
		$logger.log('Adding registration');
	}

})();