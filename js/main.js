$(function() {

	$('.show_photo').delay('1000').animate({
		opacity: '1',
		top: '0'
	}, 400);

	$(window).scroll(function() {

		var _scroll = $(this).scrollTop(),
			_skill = $('.skills').offset().top - 300,
			_works = $('.works').offset().top - 100;

		if(_scroll >= _skill) {
			$('.skills .item').each(function(i) {
				setTimeout(function() {
					$('.skills .item').eq(i).css('opacity', '1');
				}, 300 * i);
			});
		};
		if(_scroll >= _works) {
			$('.works .item').each(function(i) {
				setTimeout(function() {
					$('.works .item').eq(i).css('opacity', '1');
				}, 300 * i);
			});
		};
	});

	$("#form").submit(function(){
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за проявленный интерес!");
			$("#form").trigger("reset");
		});

		return false;
	});

	$("#eng_form").submit(function(){
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за проявленный интерес!");
			$("#form").trigger("reset");
		});

		return false;
	});

});
