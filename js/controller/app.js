(function() {

	var
	kernel = oops.runtime.instantiate( CTRL.APP );






	// region [ Dependency Resolver ]
	var sub_modules = [
		'./nav-bar',
		'./overlay-menu',
		'./tab-bar'
	];

	define( [ 'require' ], function( require ) {
		require( modules( [ './main-frame' ] ), function(){
			require( modules( sub_modules ) );
		});
	});
	// endregion
})();
