(function() {

	var kernel, apiInterface = {
		addPage: function(){

		}
	};

	oops.runtime.instantiate( CTRL.MAIN_FRAME, function( kernelOp ){
		kernel = kernelOp;
		return apiInterface;
	});






	// region [ Dependency Resolver ]
	define( [ 'require' ], function( require ){

	});
	// endregion
})();
