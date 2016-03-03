/**
 * Created by world4jason on 3/4/16.
 */
(function() {

	var
	mainFrame		= oops.runtime.instance( CTRL.MAIN_FRAME ),
	kernel			= oops.runtime.instantiate( 'tab-bar'),

	viewport		= $('[data-id="main-view"] [data-id="tab-bar"]'),
	tabbarItem		= $('[data-id="tab-bar"] > div'),
	aboutusBtn		= viewport.find('[data-id="About-Us"]'),
	solutionBtn		= viewport.find('[data-id="Solution"]'),
	protfolioBtn	= viewport.find('[data-id="Portfolio"]'),
	opensourceBtn	= viewport.find('[data-id="OpenSource"]');

	var swiperH = new Swiper('.swiper-container-h', {
		pagination: '.swiper-pagination-h',
		paginationClickable: true,
		slidesPerView: 1,
		spaceBetween: 50,
		keyboardControl: true
	});
	var swiperV = new Swiper('.swiper-container-v', {
		pagination: '.swiper-pagination-v',
		paginationClickable: true,
		direction: 'vertical',
		slidesPerView: 1,
		spaceBetween: 50,
		mousewheelControl: true,
		keyboardControl: true
	});

	tabbarItem.click(function(){
		var activateTo = $(this).index();
		console.log(activateTo);
		swiperH.slideTo(activateTo,1000);
	});

})();
