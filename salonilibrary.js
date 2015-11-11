$(document).ready(function() {
// Changes color of text inside divs when mouse enters the larger div 'ride'
	$(".ride").mouseenter(function() {
	 	$(".aboutride").css("color", "purple");
		});
	$(".ride").mouseleave(function() {
	 	$(".aboutride").css("color", "black");
		});

	$(".ride").mouseenter(function() {
	 	$("p").css("color", "purple");
		});
	$(".ride").mouseleave(function() {
	 	$("p").css("color", "black");
		});
	$(".eat").mouseenter(function() {
	 	$(".abouteat").css("color", "purple");
		});
	$(".eat").mouseleave(function() {
	 	$(".abouteat").css("color", "black");
		});
	$(".eat").mouseenter(function() {
	 	$("p").css("color", "purple");
		});
	$(".eat").mouseleave(function() {
	 	$("p").css("color", "black");
		});
//Created fade-in effect of nav bar
	$("nav ul").hide(0).delay(300).fadeIn(2000);
});