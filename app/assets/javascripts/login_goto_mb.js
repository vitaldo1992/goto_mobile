$(document).on('turbolinks:load', function() {

	$('.show-password-icon').on('click', function(e){
		if ($(this).parent().prev('input').attr('type')=='password')
			$(this).parent().prev('input').attr('type', 'text');
		else
			$(this).parent().prev('input').attr('type', 'password');
		e.stopImmediatePropagation();
	});

	$("#mb-wrapper-login").on('click', function(e){

		$("#mb-wrapper-login form input").each(function(index, element){
			if (!$(element).hasClass('pass')) {
				$('.pass').attr('type', 'password');
				// $('.show-password-icon').hide();
			}
		});

	});

	$("#mb-wrapper-login form .pass").next(".icon_container").on('click', function(e){
		console.log('hello')
		e.stopImmediatePropagation();
	});

	$("#mb-wrapper-login form input").keydown(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) // has parent
        {
        	$('.next').trigger('click')
        } else {

        	$(this).parent().find('.input-item-icon').removeClass('required');
        	$(this).parent().find('.show-password-icon').show();
        }
    });

	$("#mb-wrapper-login form input[type!='button']").on('click', function (e) {

		if (!$(this).hasClass('pass')) {
			$('.pass').attr('type', 'password');
			// $('.show-password-icon').hide();
		}

		if ($(this).val()) {
			$(this).parent().find('.show-password-icon').show();
		}
		e.stopImmediatePropagation();
	});

	$("#mb-wrapper-login form input[type!='button']").on('change', function (e) {
		var icon = $(this).parent().find('.input-item-icon');
		var vm = this;
		setTimeout(function(){

			if ($(vm).val().length == 0) {
				icon.removeClass('success').removeClass('error').addClass('required');
				$(vm).parent().find('.bar').removeClass('success-span').addClass('error-span');
			} else if ($(vm).val().length < 5 && $(vm).val().length>0) {
				icon.removeClass('success').removeClass('required').addClass('error')
				$(vm).parent().find('.bar').removeClass('success-span').addClass('error-span');
			} else {
				$(vm).parent().find('.bar').addClass('success-span').removeClass('error-span');
				icon.removeClass('error').removeClass('required').addClass('success')
			}
		},10)


	});


	$('.next').on('click', function(event) {

		var error = false;

		$("#mb-wrapper-login form input[type!='button']").each(function(index, element){
			if ($(element).val().length < 5) {
				element.focus();
				error = element;
				return false;
			}
		});

		if (!error) {
			$("#mb-wrapper-login form").submit();
		}

	});
})
