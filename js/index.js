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

});