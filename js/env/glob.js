/**
 * Created by JCloudYu on 2/19/16.
 */
(function() {
	window.modules = function( array ){
		return array.map(function( module ){ return module + "/module" });
	};
})();
