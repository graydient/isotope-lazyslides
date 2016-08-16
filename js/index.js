$( document ).ready(function() {

	window.lazySizesConfig = window.lazySizesConfig || {};
	//only for demo in production I would use normal expand option
	window.lazySizesConfig.expand = 9;

	$('.isotope-wrapper')
			.each(function(){

					var $isotope = $('.isotope-box', this);
					var $filterCheckboxes = $('input[type="radio"]', this);

					var filter = function(){
						var type = $filterCheckboxes.filter(':checked').data('type') || '*';
						if(type !== '*'){
							type = '[data-type="'+ type +'"]';
						}
						$isotope.isotope({ filter: type });
					};

					$isotope.isotope({
						itemSelector: '.isotope-item',
						layoutMode: 'masonry'
					});

					$(this).on('change', filter);
					filter();
	});	

	// instafeed
	  var userFeed = new Instafeed({
	    get: 'user',
	    userId: '2282195281',
	    clientId: 'c8f0be79ea7c47f7bdac9a80c33c00f5',
	    accessToken: '2282195281.1677ed0.df2ba73d081c400b9347fea08e15102d',
	    resolution: 'standard_resolution',
	    template: '<div class="isotope-item"><a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a></div>',
	    sortBy: 'most-recent',
	    limit: 4,
	    links: false
	  });
	  userFeed.run();

});