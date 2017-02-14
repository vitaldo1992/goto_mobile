$(document).on('turbolinks:load', function() {
	$(".mb-burger").click(function(){
		$(this).toggleClass("is-active");
		$('.mb-sidebar').toggleClass("active");
	});

	$('.mb-sidebar li a').click(function(){
		var path = $(this).attr('href');
		$(this).addClass("active");
		Turbolinks.clearCache();
	});

	$('#continue').on('click', function() {
		$('.form-send-money').submit();
		console.log($('.form-send-money'))
	})
});
