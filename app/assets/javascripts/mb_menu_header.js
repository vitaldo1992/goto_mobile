$(document).on('turbolinks:load', function() {
	$(".mb-burger").click(function(){
		$(this).toggleClass("is-active");
		$('.mb-menu').toggleClass("active");
	});

	$('.mb-menu li a').click(function(){
		var path = $(this).attr('href');
		$(this).addClass("active");
		Turbolinks.clearCache();
	});
});

// $(document).on('click', '.mb-burger', function(e) { 
// 	$(this).toggleClass("is-active");
// 	$('.mb-menu').toggleClass("active");
// });

// $(document).on('click', '.mb-menu li', function(e) {
// 	$('.mb-menu li a').removeClass('active');
// 	$(this).children().first().toggleClass('active');
// 	// alert('');
// });

// $(document).on('click', '.mb-menu li a', function(e) {
// 	e.preventDefault();
// 	var href = $(this).attr('href');
// 	setTimeout(function() { location.href = href; }, 0);
// });