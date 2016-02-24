(function() {

	var
	kernel = oops.runtime.instantiate( CTRL.APP );






	// region [ Dependency Resolver ]
	var sub_modules = [
		'./about-us',
		'./nav-bar',
		'./overlay-menu'
	];

	define( [ 'require' ], function( require ) {
		require( modules( [ './main-frame' ] ), function(){
			require( modules( sub_modules ) );
		});
	});
	// endregion
})();
