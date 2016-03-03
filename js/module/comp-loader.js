(function() {
	"use strict";



	window.loadComponents = function() {

	console.log('loadComponents');
		var promises = [];
		$( '[data-comp-tpl]' ).each(function(){
			var target = $( this ), basePath = './pages/' + target.data( 'comp-tpl' );
			promises.push(new Promise(function( fulfill, reject ){
				var waitQueue = [];
				oops.net.get( basePath + '/component.html', function( result ) {
					var content = $.tmpl( result, { base_path:basePath } );
					content.each(function(){
						var container = $(this);

						if ( !container.is( 'script[type="application/javascript"][src]' ) )
						{
							container.insertBefore(target);
							return;
						}

						waitQueue.push( oops.util.loadScript(container.attr("src")) );
					});
					target.remove();

					if ( waitQueue.length > 0 )
						Promise.all( waitQueue ).then( fulfill ).catch( reject );
					else
						fulfill();
				}, 'text').fail(reject);
			}));
		});

		return Promise.all( promises );
	};
})();
