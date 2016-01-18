$(document).ready(function(){
	$('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 900);
		e.preventDefault();
	});
	return false;
});
$(document).ready(function(){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500){  
			$('header').addClass('sticky');
		}
		else{
			$('header').removeClass('sticky');
		}
	});
});
$('.parallax-window').parallax({
	positionX: 'top',
	positionY: 'center'
});
$(document).ready(function() {
	$("#owl-demo").owlCarousel({
	 	navigation : false, // Show next and prev buttons
    	slideSpeed : 300,
    	paginationSpeed : 400,
    	autoPlay : true,
    	singleItem : true
	});
});
