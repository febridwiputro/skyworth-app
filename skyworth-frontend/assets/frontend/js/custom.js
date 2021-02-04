$(function() {

	"use strict";

	var coreClass = '.skyworth ';
	var categorySearch;
	var _isresponsive;
	var autoCompleteParams = {category: 'all-categories'};

	if($('.menu-button').is(':visible')) _isresponsive = true;
	else _isresponsive = false;

	$(coreClass+'.search-drop-down .category-entry').on('click', function(){
		var dataCategory = $(this).attr('data-category');
		categorySearch = dataCategory;
		autoCompleteParams.category = dataCategory;
		console.log(dataCategory);
	});

    $(coreClass+'input[name="produk"]').autocomplete({
        serviceUrl: window.location.origin+'/autocomplete',
        params: autoCompleteParams,
        onSelect: function (suggestion) {
            var element = $(this);
            window.location.replace(suggestion.single_product_url);
        },
        onSearchComplete: function (query, suggestions) {

        }
    });

    /*==============================*/
	/* function on page scroll */
	/*==============================*/
	function skyworthScrollCalculations(){
		var winScr = $(window).scrollTop();
		var headerComp = ($(coreClass+'header').outerHeight()<=200)?$(coreClass+'header').outerHeight():200;
		if(winScr>=headerComp && !$(coreClass+'.header-demo').length) {
			if(!$(coreClass+'.scroll-to-top').hasClass('visible')){
				$(coreClass+'.scroll-to-top').addClass('visible');
			}
		}
		else {
			if($(coreClass+'.scroll-to-top').hasClass('visible')){
				$(coreClass+'.scroll-to-top').removeClass('visible');
			}
		}
	}

	skyworthScrollCalculations();
	$(window).scroll(function(){
		skyworthScrollCalculations();
	});

	$(coreClass+'.scroll-to-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600); 
	});

	$('nav li a').on('click', function(){
		if(_isresponsive){
			$(this).parent().find('.submenu').slideToggle();
			$(this).parent().toggleClass('opened');
		}
	});
});