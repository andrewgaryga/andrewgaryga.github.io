$(document).ready(function() {

	$('#Container').mixItUp();

	$(".controls .btn").addClass("animated bounce");

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

	$(window).scroll(function() {
	    if ($(".navbar").offset().top > 80) {
	        $(".navbar-fixed-top").addClass("top-nav-collapse");
	    } else {
	        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	    }
	});


	$("#header a.portfolio").hover(function(){
	    $("#header a.portfolio img").css("opacity", ".4");
	}, function(){
    	$("#header a.portfolio img").css("opacity", "0");

	}); 

	$("#header a.education").hover(function(){
	    $("#header a.education img").css("opacity", ".4");
	}, function(){
    	$("#header a.education img").css("opacity", "0");

	}); 

	$("#header a.contact").hover(function(){
	    $("#header a.contact img").css("opacity", ".4");
	}, function(){
    	$("#header a.contact img").css("opacity", "0");

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



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


	
});

