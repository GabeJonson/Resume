$(document).ready(function() {

	$(window).on('scroll', function(){

		var scrollY = $(this).scrollTop(),
			match = Math.round( $('.assistWrap p:last-child').offset().top );

		$('.assistOffice').css({
			backgroundPosition : '0% ' + scrollY / 10 + '%'
		});
		$('.tariff').css({
			backgroundPosition : '0% ' + scrollY / 45 + '%'
		});
		// parallax

		// $(this).one('scroll', function(){
		// 	if( scrollY < match ){
		// 		$('.timer').countTo();
		// 	};
		// });
		// countUp

	});

	$('.menu').click(function(){

		$('.mobileNav').slideToggle('fast');

		$('.lang').slideUp('fast');

	});

	$('.mobileNav a').click(function(){

		$('.mobileNav').slideUp('fast');

	});

	$('.openLang').click(function(){

		$('.lang').slideToggle('fast');

		$('.mobileNav').slideUp('fast');

	});
		// hide show menu and language panels



	// $('.registerLink').click(function(){

	// 	reg_form();

	// });
	// $('.loginLink').click(function(){

	// 	login_form();

	// });
		//Moadal
	$('.fa-times, #overlay_register, #overlay_login').click(function(){

		$('#modal_register, #modal_login').animate({
			opacity: 0, 
			marginTop: '0px'
		}, 200,

			function(){

				$(this).css('display', 'none');

				$('#overlay_register, #overlay_login').fadeOut(400);

		});
	});
		// Close modal on click on close button and overlay

	$('.discover').click(function(){

		$(this).parents('.dicoverPrice').find('.price').slideToggle('fast');

	});
		// SlideUpDown prise for servises

	var onMapMouseleaveHandler = function (event) {

		var that = $(this);

		that.on('click', onMapClickHandler);

		that.off('mouseleave', onMapMouseleaveHandler);

		that.find('iframe').css("pointer-events", "none");

	}

	var onMapClickHandler = function (event) {

		var that = $(this);

		that.off('click', onMapClickHandler);

		that.find('iframe').css("pointer-events", "auto");

		that.on('mouseleave', onMapMouseleaveHandler);

	}

	$('.contacts, .contacts .wrap').on('click', onMapClickHandler); // Activate on click
		// Goole maps disabled scroll

	setInterval(function(){

	$('.forWorkers img[src*=water')
		.delay(10500).animate({opacity : '0'}, 1000)
		.delay(10000).animate({opacity : '1'}, 1000)

	}, 2000);

	setInterval(function(){

		$('.forWorkers img[src*=cleaning')
		.delay(10500).animate({opacity : '1'}, 1000)
		.delay(10000).animate({opacity : '0'}, 1000)

	}, 2000);
		// Animate for water & cleaning

	phone(); //Phone animation


	$(".pass").on("keydown", function(e){

		var strength = 0
		password = $(this).val();

		id = "#"+$(this).attr("name")+"-stts";

		$(id).html(""); $(id).removeClass().addClass("pass-stts");

		if( $(this).length == 0 ) { return true; }

		//if the password length is less than 6, return message.
		if( password.length < 6 ) { $(id).html("<b>Очень простой</b>"); $(id).addClass("wdh0 pass-stts"); return true; }

		//if length is 8 characters or more, increase strength value
		if( password.length > 7 ) strength += 1

		if( password.length > 12 ) strength += 1

		//if password contains both lower and uppercase characters, increase strength value
		if( password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) ) strength += 1

		//if it has numbers and characters, increase strength value
		if( password.match(/([a-zA-Z])/) && password.match(/([0-9])/) ) strength += 1

		//if it has one special character, increase strength value
		if( password.match(/([!,%,&,@,#,$,^,*,?,_,~])/) ) strength += 1

		//if it has two special characters, increase strength value
		if( password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,",%,&,@,#,$,^,*,?,_,~])/) ) strength += 1

		//if value is less than 2
		if ( strength < 2 ) $(id).attr("class", "wdh1").html("<b>Простой</b>");

		else if ( strength < 3 ) $(id).attr("class", "wdh2").html("<b>Средний</b>");

		else if ( strength == 6 ) $(id).attr("class", "wdh4").html("<b>Очень сложный</b>");

		else $(id).attr("class", "wdh3").html("<b>Сложный</b>");

		$(id).addClass("pass-stts");

		return true;
	});
		// Password status line

	// var inv = '/?invited=',
	// 	referal_link = inv + '1234'; //c834fb7; var whith cookie	

	// $.cookie('referal', referal_link, { expires: 60, path: '/' }); // Create a cookie whith name referal

	// var cookie_read = $.cookie('referal'),
	// 	window_location = window.location.toString(),
	// 	to_string = window_location.split('=');


	// if ( cookie_read.split('=')[1] == to_string[1] ) { // if link have cookie and it's equal to value after =

	// 	$('input[name="name"]').val(to_string[1]); // Wright valeu in input

	// 	reg_form(); // Show registration form
		
	// } else {

	// 	$('input[name="name"]').val(''); // Input value is empty

	// };

	// console.log( window.location.toString().split('/') )
	// console.log( referal_link )

prices = [ 
	[1, 100, 100], 
	[101, 500, 80], 
	[501, 1000, 60], 
	[1001, 5000, 40], 
	[5001, 10000, 20], 
	[10001, 20000, 10]
];

$('.value_employe').on('change', function(){ 
	var epmloye_val = $(this).val();
	$('.end_price_employe').text( '$' + epmloye_val )
});

$('.value_employe').on('keydown', function(){ 
	var epmloye_val = $(this).val();
	$('.end_price_employe').text( epmloye_val )
});

$('.value_of_employe').on('change', function()
{ recount( $(this).parent().attr("id") ); });

$('.value_of_employe').on('keydown', function()
{ recount( $(this).parent().attr("id") ); });

function recount( id ){

	var echo = "";
	var summ = 0;
	var vl = vlt = $("#"+id+" .value_of_employe").val();
	var cnt = prices.length;
  
	for( var i = 0; i < cnt; i++ ){
		var prc = sum = 0;
		if( vl > prices[ i ][ 1 ] ){
			vl-= prices[ i ][ 1 ];
			var sum = ( prices[ i ][ 1 ] * prices[ i ][ 2 ] )/100;
			summ+= sum;
			$("#"+id+" .line .th"+i).css("background-size", "100% 200px");
	}
	else if( vl == 0 ) {
		$("#"+id+" .line .th"+i).css("background-size", "0 200px");
	}
	else{

		var sum = ( vl * prices[ i ][ 2 ] )/100;
		var prc = vlt / ( prices[ i ][ 1 ] ) * 100;

		$("#"+id+" .line .th"+i).css("background-size", (prc)+"% 200px");

		summ+=sum;
		vl = 0;
	}
	
	$("#"+id+" .end_price").html( "$"+summ );
	echo += prices[ i ][ 1 ] + ": "+ sum +": "+ i +"<br>";
	}
}
















});

	var timer = setInterval(function(){

		phone(); // Function whith phone animation

	}, 20000);

	// setTimeout(function(){
	// 	clearInterval(timer);
	// }, 24000);

	function phone(){

		$('.figBg').delay(4000)
			.animate({top : '-200'}, 1000)
			.delay(4000)
			.animate({top : '0'}, 1000)
			.delay(4000)
			.animate({top : '-450'});

		$('.finger').delay(5000)
			.animate({opacity : '0.5'})
			.animate({opacity : '0'})
			.animate({bottom : '170'}).delay(4000)
			.animate({opacity : '0.5'})
			.animate({opacity : '0'})
			.animate({bottom : '185', zIndex : '10'}).delay(1000)
			.animate({bottom : '135'});

		$('.water_check').delay(5500)
			.animate({opacity : 1}).delay(5000)
			.animate({opacity : 0});

		$('.master_check').delay(11000)
			.animate({opacity : 1}).delay(5000)
			.animate({opacity : 0});

		$('.print').delay(5500)
			.animate({marginTop : '45'}).delay(5000)
			.animate({marginTop : '10'});

		$('.water').delay(11000)
			.animate({marginTop : '90'}).delay(5000)
			.animate({marginTop : '10'});

	};

	// Phone animation

	function reg_form(){

		$('#overlay_register').fadeIn(400, function(){

			$('#modal_register')
					.css('display', 'block')
					.animate({
							opacity: 1,
							marginTop: '100px'
						}, 200);
		});
	};
	// Show registration form

	function login_form(){

		$('#overlay_login').fadeIn(400, function(){

			$('#modal_login')
					.css('display', 'block')
					.animate({
							opacity: 1,
							marginTop: '100px'
						}, 200);
		});
		
	};
	// Show login form
