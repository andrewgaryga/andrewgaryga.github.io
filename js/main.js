$(document).ready(function() {

	$('#Container').mixItUp();

	$(".controls .btn").addClass("animated bounce");

	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 80) {
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	    } else {
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	    }
	});

	// $(".caption-content span").on('hover').addClass("animated bounce");
	$(".caption-content .search_wrap").hover(function(){

	    $(this).addClass("animated shake"); 
	    $(this).css("color", "black");
	}, function(){
    	$(this).delay("slow").removeClass("animated shake");
    	$(this).css("color", "white");

	}); 

	$("#education img").on('click', function(){

	    $(this).toggleClass("show_img"); 
	    $(".shadow_box").toggleClass("shadow"); 
	}); 

	$(".shadow_box").on('click', function(){

	    $(".shadow_box").toggleClass("shadow"); 
	    $("#education img").removeClass("show_img"); 

	}); 

	 // Add smooth scrolling on all links inside the navbar
	 $("ul li a").on('click', function(event) {

		 // Prevent default anchor click behavior
		 event.preventDefault();

		 // Store hash
		 var hash = this.hash;

		 // Using jQuery's animate() method to add smooth page scroll
		 // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		 $('html, body').animate({
			 scrollTop: $(hash).offset().top
		 }, 800, function(){
		
			 // Add hash (#) to URL when done scrolling (default click behavior)
			 window.location.hash = hash;
		 });
	 });

	// //Цели для Яндекс.Метрики и Google Analytics
	// $(".count_element").on("click", (function() {
	// 	ga("send", "event", "goal", "goal");
	// 	yaCounterXXXXXXXX.reachGoal("goal");
	// 	return true;
	// }));

	// //SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	// //Аякс отправка форм
	// //Документация: http://api.jquery.com/jquery.ajax/
	// $("#form").submit(function() {
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
				
	// 			$("#form").trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	// $("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });
