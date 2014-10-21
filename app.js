$(document).ready(function() {
	$('#contactUs').on('click', function(){
		$("html, body").animate(
	      {scrollTop: $("#contact").offset().top}
	    , 800)

	})
})