/**
 * Created by world4jason on 2/22/16.
 */
(function() {

	var kernel, apiInterface = {
		addPage: function(){

		}
	};

	oops.runtime.instantiate( CTRL.MAIN_FRAME, function( kernelOp ){
		kernel = kernelOp;
		return apiInterface;
	});






})();
