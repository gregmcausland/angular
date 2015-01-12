(function() {
	'use strict';

	angular
		.module('stv.core.registration', [])
		.run(run);

	run.$inject = ['logger'];

	function run( $logger ) {
		$logger.log('Adding registration');
	}

})();