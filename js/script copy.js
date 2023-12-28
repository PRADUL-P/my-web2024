"use strict";
(function () {
	// Global variables
	var
		userAgent = navigator.userAgent.toLowerCase(),
		initialDate = new Date(),

		$document = $(document),
		$window = $(window),
		$html = $("html"),
		$body = $("body"),

		isDesktop = $html.hasClass("desktop"),
		isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		windowReady = false,
		isNoviBuilder = false,
		livedemo = true,

		plugins = {
		
			scroller:                $( '.scroll-wrap' ),
	
		};


		// JQuery mousewheel plugin
		if (plugins.scroller.length) {
			for (var i = 0; i < plugins.scroller.length; i++) {
				var scrollerItem = $(plugins.scroller[i]);

				scrollerItem.mCustomScrollbar({
					theme: scrollerItem.attr('data-theme') ? scrollerItem.attr('data-theme') : 'minimal',
					scrollInertia: 100,
					scrollButtons: {enable: false}
				});
			}
		}

	

}());
