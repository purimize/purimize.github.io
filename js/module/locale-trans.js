(function() {
	"use strict";

	$( '[data-trans]' ).each(function(){
		var
		target	= $(this),
		attr	= target.data( 'trans-attr' ),
		trans	= locale[ target.data( 'trans' ) ];

		if ( !attr || attr == "" )
			target.html( trans );
		else
			target.attr( attr, trans );
	});

})();
