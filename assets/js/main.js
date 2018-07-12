// Navegación Cabecera
$('body > header > nav > div > button').on('click', function(event) {
	event.preventDefault();
	$(this).find('span').toggleClass('active-btn');
	$('body > header > menu').fadeToggle('normal');
});

// About
$('body > section:first-of-type > div > section > footer > div > button').on('click', function(event) {
	event.preventDefault();
	if ($('body > section:first-of-type > div > section > div:last-of-type').is(':visible')) {
		$('body > section:first-of-type > div > section > div:last-of-type').fadeOut('fast', function() {
			$('body > section:first-of-type > div > section > div:first-of-type').fadeIn('fast');
		});
	}
});

$('body > section:first-of-type > div > section > footer > div > button:last-of-type').on('click', function(event) {
	event.preventDefault();
	if ($('body > section:first-of-type > div > section > div').is(':visible')) {
		$('body > section:first-of-type > div > section > div').fadeOut('fast', function() {
			$('body > section:first-of-type > div > section > div:last-of-type').fadeIn('fast');
		});
	}
});