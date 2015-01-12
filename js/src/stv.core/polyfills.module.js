(function() {
	'use strict';

	angular
		.module('stv.core.polyfills', [])
		.run(run);

	run.$inject = ['logger'];

	function run( $logger ) {
		$logger.log('Adding polyfills');
	}

})();