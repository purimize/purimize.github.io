/**
 * Created by JCloudYu on 2/19/16.
 */
(function() {

	window.CORE = window.CORE || {};

	window.CORE.BEAT = window.CORE.BEAT || {};
	oops.core.expand( window.CORE.BEAT, {
		SYSTEM_BOOT:	'heartbeat system-boot',
		DATA_INIT:		'heartbeat data-init',
		UI_INIT:		'heartbeat ui-init',
		LATE_INIT:		'heartbeat late-init',
		SYSTEM_INIT:	'heartbeat system-init'
	}, true );

	window.CORE.EVENT = window.CORE.EVENT || {};
	oops.core.expand( window.CORE.EVENT, {
		HEARTBEAT_SYNC: 'heartbeat synchronization'
	}, true );



	window.CTRL = window.CTRL || {};
	oops.core.expand( window.CTRL, {
		APP: 'app-controller',
		MAIN_FRAME: 'main-frame-controller'
	}, true );

})();
