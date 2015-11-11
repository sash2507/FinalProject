$(document).ready(function() {
// Enlarges the div upon mouseenter and returns back to default size upon mouseleave	
	$('.rideone, .ridetwo, .ridethree, .ridefour, .ridefive')
	.on('mouseenter', function(){
		var div = $(this);
		div.stop(true, true).animate({
			width: "+=5%",
			height: "+=5%"
		}, 'fast');
	})
 	.on('mouseleave', function(){
 		var div = $(this);
 		div.stop(true, true).animate({ 
	        width: "-=5%",
	        height: "-=5%"
	        }, 'fast');
	});
	$('.eatone, .eattwo, .eatthree, .eatfour, .eatfive')
	.on('mouseenter', function(){
		var div = $(this);
		div.stop(true, true).animate({
			width: "+=5%",
			height: "+=5%"
		}, 'fast');
	})
 	.on('mouseleave', function(){
 		var div = $(this);
 		div.stop(true, true).animate({ 
	        width: "-=5%",
	        height: "-=5%"
	        }, 'fast');
	});

});