// Navegación Cabecera
$('body > header > nav > div > button').on('click', function(event) {
	event.preventDefault();
	$(this).find('span').toggleClass('active-btn');
	$('body > menu').fadeToggle('normal');
});

// Navegación Menú
$('.item-menu').on('click', function(event) {
	event.preventDefault();
	let Item = $(this).attr('href');

	$('body > menu').fadeToggle('normal');

	$('body > header > nav > div > button > span').removeClass('active-btn');
	
	$('body, html').stop(true, true).animate({
		scrollTop: $(Item).offset().top - 75
	}, 1000);
});

$('.item-nav').on('click', function(event) {
	event.preventDefault();
	let Item = $(this).attr('href');
	
	$('body, html').stop(true, true).animate({
		scrollTop: $(Item).offset().top - 75
	}, 1000);
});

// Barra de Navegación
$(window).scroll(function(event) {
	let wHeight = $(window).scrollTop();

	if (wHeight > 500) {
		$('body > nav').css('margin-top', '0px');
	} else {
		$('body > nav').css('margin-top', '-75px');
	}
});

// Nosotros
$(function() {
	$('#AboutBtn2').on('click', function(event) {
		event.preventDefault();

		$(this).addClass('about-active-button');
		$('#AboutBtn1').removeClass('about-active-button');

		$('#AboutContent1').fadeOut(300, function() {
			$('#AboutContent2').fadeIn(300);
		});
	});

	$('#AboutBtn1').on('click', function(event) {
		event.preventDefault();

		$(this).addClass('about-active-button');
		$('#AboutBtn2').removeClass('about-active-button');

		$('#AboutContent2').fadeOut(300, function() {
			$('#AboutContent1').fadeIn(300);
		});
	});
});

// Servicios
$(function() {
	let Btn1 = $('body > section:nth-of-type(3) > section > div:first-of-type > menu > a:nth-of-type(1)');
	let Btn2 = $('body > section:nth-of-type(3) > section > div:first-of-type > menu > a:nth-of-type(2)');
	let Btn3 = $('body > section:nth-of-type(3) > section > div:first-of-type > menu > a:nth-of-type(3)');
	let Btn4 = $('body > section:nth-of-type(3) > section > div:first-of-type > menu > a:nth-of-type(4)');

	let Cont1 = $('body > section:nth-of-type(3) > section > div:first-of-type > div:nth-of-type(1)');
	let Cont2 = $('body > section:nth-of-type(3) > section > div:first-of-type > div:nth-of-type(2)');
	let Cont3 = $('body > section:nth-of-type(3) > section > div:first-of-type > div:nth-of-type(3)');
	let Cont4 = $('body > section:nth-of-type(3) > section > div:first-of-type > div:nth-of-type(4)');

	let Image = $('body > section:nth-of-type(3) > section > div:last-of-type > img');

	let Figure = $('body > section:nth-of-type(3) > section > div:last-of-type > figure');

	let Quote = $('body > section:nth-of-type(3) > section > div:last-of-type > blockquote');

	Btn1.on('click', function(event) {
		event.preventDefault();

		$(this).addClass('service-btn-active');
		Btn2.removeClass('service-btn-active');
		Btn3.removeClass('service-btn-active');
		Btn4.removeClass('service-btn-active');

		if (Figure.is(':visible')) {
			Figure.fadeOut(300, function() {
				Image.fadeIn(300);
				Quote.fadeIn(300);
			});
		}

		if (Cont2.is(':visible')) {
			Cont2.fadeOut(300, function() {
				Cont1.fadeIn(300);
			});
		}

		if (Cont3.is(':visible')) {
			Cont3.fadeOut(300, function() {
				Cont1.fadeIn(300);
			});
		}

		if (Cont4.is(':visible')) {
			Cont4.fadeOut(300, function() {
				Cont1.fadeIn(300);
			});
		}
	});

	Btn2.on('click', function(event) {
		event.preventDefault();

		$(this).addClass('service-btn-active');
		Btn1.removeClass('service-btn-active');
		Btn3.removeClass('service-btn-active');
		Btn4.removeClass('service-btn-active');

		if (Image.is(':visible')) {
			Quote.fadeOut(300);
			Image.fadeOut(300, function() {
				Figure.fadeIn(300);
			});
		}

		if (Cont1.is(':visible')) {
			Cont1.fadeOut(300, function() {
				Cont2.fadeIn(300);
			});
		}

		if (Cont3.is(':visible')) {
			Cont3.fadeOut(300, function() {
				Cont2.fadeIn(300);
			});
		}

		if (Cont4.is(':visible')) {
			Cont4.fadeOut(300, function() {
				Cont2.fadeIn(300);
			});
		}
	});

	Btn3.on('click', function(event) {
		event.preventDefault();

		$(this).addClass('service-btn-active');
		Btn1.removeClass('service-btn-active');
		Btn2.removeClass('service-btn-active');
		Btn4.removeClass('service-btn-active');

		if (Figure.is(':visible')) {
			Figure.fadeOut(300, function() {
				Image.fadeIn(300);
				Quote.fadeIn(300);
			});
		}

		if (Cont1.is(':visible')) {
			Cont1.fadeOut(300, function() {
				Cont3.fadeIn(300);
			});
		}

		if (Cont2.is(':visible')) {
			Cont2.fadeOut(300, function() {
				Cont3.fadeIn(300);
			});
		}

		if (Cont4.is(':visible')) {
			Cont4.fadeOut(300, function() {
				Cont3.fadeIn(300);
			});
		}
	});

	Btn4.on('click', function(event) {
		event.preventDefault();

		$(this).addClass('service-btn-active');
		Btn1.removeClass('service-btn-active');
		Btn2.removeClass('service-btn-active');
		Btn3.removeClass('service-btn-active');

		if (Figure.is(':visible')) {
			Figure.fadeOut(300, function() {
				Image.fadeIn(300);
				Quote.fadeIn(300);
			});
		}

		if (Cont1.is(':visible')) {
			Cont1.fadeOut(300, function() {
				Cont4.fadeIn(300);
			});
		}

		if (Cont2.is(':visible')) {
			Cont2.fadeOut(300, function() {
				Cont4.fadeIn(300);
			});
		}

		if (Cont3.is(':visible')) {
			Cont3.fadeOut(300, function() {
				Cont4.fadeIn(300);
			});
		}
	});
});