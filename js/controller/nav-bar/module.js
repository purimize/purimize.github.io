/**
 * Created by world4jason on 2/22/16.
 */
(function() {

	var
	mainFrame	= oops.runtime.instance( CTRL.MAIN_FRAME ),
	kernel		= oops.runtime.instantiate( 'nav-bar'),

	viewport	= $('[data-id="main-view"] [data-id="nav-bar"]'),
	menuBtn		= viewport.find('[data-id="menu"]');


	menuBtn.click(function(){
		kernel.fireTarget("overlay-menu","show");
	});







})();
