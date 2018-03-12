console.log('common');



$(document).ready(function() {

	// transparent input, etx
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');

		$(this).focus(function(){
			$(this).attr('placeholder', '');
		});
		$(this).blur(function(){
			$(this).attr('placeholder', placeholder);
		});
	});

	$('a[href="#"]').click(function (e) {
		e.preventDefault();
	});

	$('.js-scroll-to').on("click", function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

	$('.js-slider-works').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		dots: true,
		appendDots:$('.works-dots')
	});
	$('.js-slider-about').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		fade: true,
		autoplay: true,
		dots: true,
		appendDots:$('.about-dots')
	});
	$('.js-slider-product').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		dots: true,
		appendDots:$('.product-dots')
	});
	$('.js-slider-photo').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});
	$('.js-slider-service').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		fade: true,
		autoplay: true,
		dots: true,
		appendDots:$('.service-dots')
	});
	// menu open/close
	$('.menu-open, .menu-close').click(function () {
		$('.header-mob').slideToggle();
	});
});






