$(document).ready(function() {

//Index page: map appears as a slide down, then the clickable objects fade in slightly later
	

    $(".location").hide(0).delay(500).slideDown(2000);

    $(".mapoverlay1").hide(0).delay(1000).fadeIn(6000);

    $(".mapoverlay2").hide(0).delay(2000).fadeIn(6000);

	$(".mapoverlay3").hide(0).delay(3000).fadeIn(6000);


	// Info Page Infoboxes enlarge upon mouse hover

	$('.infocontainer .infowrap')
    .on('mouseenter', function(){
        var div = $(this);
        div.stop(true, true).animate({ 
            width: "+=25",
            height: "+=25"
        }, 'fast');
    })

    .on('mouseleave', function(){
        var div = $(this);
        div.stop(true, true).animate({ 
            width: "-=25",
            height: "-=25"
        }, 'fast');
    })


// Appears on info page when user clicks "buy ticket"
        

        $('#ticket-button').click( function() {
            alert('If this were a real site this would take you to an e-commerce page');
        } );



});


