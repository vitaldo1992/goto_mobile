$(document).on('turbolinks:load', function() {
	// alert(document.documentElement.clientWidth);
	// alert(document.documentElement.clientHeight);
	if (!navigator.userAgent.match(/Iphone/i)) {
		$('#mb-wrapper-landing .mb-wrap').addClass('android-wrap');
	}
});