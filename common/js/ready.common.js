$(function() {
	// Hamburger Menu Open
	$('#navToggle').on('click', function() {
		$('body').toggleClass('open');
	});

	// Tools Pull Down
	$('#btnAccessibility').on('click', function() {
		$('#tools').toggle();
		$("#btnAccessibility").toggleClass("open");
	});

	// Foreigners Pull Down
	$('#btnForeigners').on('click', function() {
		$('#foreigners ul').toggle();
		$("#btnForeigners").toggleClass("open");
	});

	// Font Size Change
	$('#wrapper').ChangeFontSize({
		max_value: 20,
		zoom_value: 2,
	});

	// Top Of Page
	var $pageTop = $('#pageTop');
	$('#pageTop').TopOfPage();

	$(window).scroll(function () {
		if( $(this).scrollTop() > 100 ) {
			$pageTop.fadeIn();
		} else {
			$pageTop.fadeOut();
		}
	});
});
$(window).on('load', function() {
	// Anchor Link
	var hashId = location.hash;
	if( hashId ) {
		AnchorLink(hashId);
	}

	$('#contents a[href^="#"], #dirItemList a[href^="#"]').on('click', function() {
		AnchorLink($(this).attr('href'));
	});

	function AnchorLink(hash) {
		//var headerHeight = $('#header').outerHeight(true);
		var headerHeight = 0;

		hash = hash.replace('#', '');
		if( $('a[name=' + hash + ']').length ) {
			var position = $('a[name=' + hash + ']').offset().top - headerHeight;
			$('html, body').animate({scrollTop: position}, 500);
		} else if( $('[id=' + hash + ']').length ) {
			var position = $('#' + hash).offset().top - headerHeight;
			$('html, body').animate({scrollTop: position}, 500);
		}
	}
});