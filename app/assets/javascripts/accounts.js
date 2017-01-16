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