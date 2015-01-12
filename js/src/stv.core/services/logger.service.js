(function() {
	'use strict';

	angular
		.module('stv.core')
		.factory('logger', logger);

	logger.$inject = ['logging'];

	function logger( logging ) {
		var service = {
			log: log
		};
		return service;

		function log( msg ) {
			if ( logging ) {
				console.log( msg );
			}
		}
	}

})();