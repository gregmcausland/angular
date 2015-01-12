(function() {
	'use strict';

	angular
		.module('stv.core.helpers', [])
		.run(run);

	run.$inject = ['logger'];

	function run( $logger ) {
		$logger.log('Adding helpers');
	}

})();