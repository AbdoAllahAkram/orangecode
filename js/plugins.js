/*jshint -W117*/

$(document).ready(function () {

	'use strict';

	//Adjust Header width and heigh
	
	var myHeader = $(".header");
	var mySlider = $('.bxslider');

	myHeader.height($(window).height());
	myHeader.width($(window).width());
	
	$(window).resize(function () {
		
		myHeader.height($(window).height());
		
		// Make BX-Slider in Center
		
		mySlider.css("paddingTop", ( $(window).height() - $('.bxslider li').height() ) /2);
	});
	
	// BxSlider Arrow
	
	
	// Links Add class Active
	
	$(".links li").click(function() {
		
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	
	
	// Make BX-Slider in Center
	
	mySlider.css("paddingTop", ( $(window).height() - $('.bxslider li').height() ) /2);
	
	//Trigger BX-Slider
	
	$('.bxslider').bxSlider({
		
		pager: false,
		
		
		pagerCustom: '#bx-pager',
		mode: 'fade',
		onSliderLoad: function(){
			$(".bxslider-wrap").css("visibility", "visible");
		},
		auto: true,
		nextText: '<i class="fa fa-angle-right" ></i>',
		prevText: '<i class="fa fa-angle-left"></i>',
		
	});
	
	
	
	
	// arrow of scroll up
	
	$(window).on("scroll", function () {
		var scr = $(window).scrollTop();

		if( scr >450) {
			$('.fa-chevron-circle-up').fadeIn();
		}
		else {
			$('.fa-chevron-circle-up').fadeOut();
		}
		
	});
	
	
	//Make Smooth Scroll 
	
	$('.fa-chevron-circle-up').click (function () {
		$('html, body').animate({
			
			scrollTop: 0 
		} ,900);
	});
	
	$('.links a').click (function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value') ).offset().top - 20,
		}, 900 );
		
		console.log($(this).data('value'));
	});
	
	
	// display content animate
	
	$(window).scroll (function () {
		var scr = $(window).scrollTop();
		if(scr > 300){
			$('.services .item').animate ({
				opacity: 1,
			}, 1000);
		}  if (scr > 850) {
			$('.our-team .box').animate ({
				opacity: 1,
			}, 1000);
		}  if ( scr > 1100) {
			$('.testimonial').animate ({
				opacity: 1,
			}, 1000);	
		}
	});
	
	// Our slider Code
	
	(function autoSlider () {
		
		$('.slider .active').each(function () {
			if (!$(this).is(':last-child')) {
				
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active').next().fadeIn(1000).addClass('active');
					autoSlider();
				});
				
			} else {
				
				 $(this).delay(3000).fadeOut(1000, function () {
					 $(this).removeClass('active');
					 $('.slider div').eq(0).fadeIn(1000).addClass('active').fadeIn(1000);
					 autoSlider();
				 });
			}
		});
		
	}());

	
	// Adjust MixItUp
	
	$('#Container').mixItUp();
	
	// Project Selector
	
	$('.project li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');	
	});
	
	
	
	// Adjust niceScroll
	
	$('html').niceScroll({

		cursorcolor: ('#eb751d'),
		
		cursorborder: ('none'),
		
		zindex: 999999,

	});
	
	

	
});