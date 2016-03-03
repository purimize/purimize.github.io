/**
 * Created by world4jason on 2/22/16.
 */
(function() {

	var
	mainFrame	= oops.runtime.instance( CTRL.MAIN_FRAME),
	viewport	= $('[data-id="overlay-menu"]'),
	popBox		= viewport.find('[data-id="container"]');
	closeBtn	= popBox.find('[data-id="closeBtn"]');



	oops.runtime.instantiate( "overlay-menu", function( kernelOp ){
		kernel = kernelOp;
		kernel.on("show",function(){
			viewport.removeClass('hidden');
		});
	});

	closeBtn.click(function(){
		viewport.addClass('hidden');
	});







})();
