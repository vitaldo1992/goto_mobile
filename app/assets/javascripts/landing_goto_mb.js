$(function(){
	// alert(document.documentElement.clientWidth);
	// alert(document.documentElement.clientHeight);
	if (!navigator.userAgent.match(/Iphone/i)) {
		$('#mb-wrapper-landing').attr('id', 'mb-wrapper-landing-android');
	}
})