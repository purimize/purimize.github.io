/**
 * Created by JCloudYu on 2/19/16.
 */
(function(){
	requirejs.config({ baseUrl:"js" });

	var globalDependency = [
		'env/constant',
		'env/locale',
		'env/glob'
	];

	require( globalDependency, function(){
		require( [ 'controller/app' ],  function(){
			$( document ).one( 'system-ready', function(){
				oops.runtime
				.fire( CORE.EVENT.HEARTBEAT_SYNC, CORE.BEAT.SYSTEM_BOOT )
				.fire( CORE.EVENT.HEARTBEAT_SYNC, CORE.BEAT.DATA_INIT )
				.fire( CORE.EVENT.HEARTBEAT_SYNC, CORE.BEAT.UI_INIT )
				.fire( CORE.EVENT.HEARTBEAT_SYNC, CORE.BEAT.LATE_INIT )
				.fire( CORE.EVENT.HEARTBEAT_SYNC, CORE.BEAT.SYSTEM_INIT );
			})
			.ready(function(){ $( document ).trigger( 'system-ready' ); });
		});
	});
})();
