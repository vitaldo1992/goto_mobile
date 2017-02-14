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
			if (!$(element).hasClass('password')) {
				$('.pass').attr('type', 'password');
			}
		});

	});

	var email_pattern = new RegExp(/^[a-zA-Z0-9._!#$%&'*+\/=?^`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
	var password_pattern = new RegExp(/^[0-9A-Za-z]{8,}$/);


  function restrictInput(elem) {
  	if (elem.hasClass('email')) {
  				elem.prop('regExp', email_pattern)
  	}
  	if (elem.hasClass('password')) {
  				elem.prop('regExp', password_pattern)
  	}
  }

  $('#mb-wrapper-login form .input-container input').each(function(index, elem){
  	restrictInput($(elem))
  });

	function validiting(elem) {
		if (elem.value.length == 0) {
			$(elem).parent().find('.bar').addClass('error-span').removeClass('success-span');
			$(elem).parent().addClass('required').removeClass('error success');
			return elem
		}
		if (!elem.value.match(elem.regExp)) {
			$(elem).parent().find('.bar').addClass('error-span').removeClass('success-span');
			$(elem).parent().addClass('error').removeClass('required success');
			return elem
		}
		$(elem).parent().addClass('success').removeClass('error required');
		$(elem).parent().find('.bar').addClass('success-span')
	}
	$('#mb-wrapper-login form :submit').on('click', function(){
		let error_element = null;
		$('#mb-wrapper-login form .input-container input').each( function(index,value) {
		 if	(!error_element && validiting(value)){
			 error_element = value;
		 }
		});
		if (error_element) {
			$(error_element).focus();
			return false;
		}
	});

	$('#mb-wrapper-login form .input-container input').on('focusout', function(){
		validiting(this);
	});

	$('#mb-wrapper-login form .input-container').on('click focus', function(){
		$('#mb-wrapper-login form .input-container .bar-span').removeClass('focused');
		$(this).find('.bar-span').addClass('focused')
	});

	$('body').on('click', function(event){
		if (!$(event.target).closest('.input-container').length) {
			$('#mb-wrapper-login form .input-container .bar-span').removeClass('focused');
		}
		if (!$(event.target).hasClass('password')) {
			$('#mb-wrapper-login form .input-container .password').attr('type', 'password')
		}
	});
	$('.password').on('click focus keyup', function(){
		if (this.value.length>0) {
			$(this).parent().find('.show-password-icon').show()
		} else {
			$(this).parent().find('.show-password-icon').hide()
		}
	});
});
