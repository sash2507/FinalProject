$(document).ready(function() {

// Location page: Map is hidden upon loading, then fades in over 2 sec

		

    $(".location").hide(0).delay(500).slideDown(2000);

    $(".mapoverlay1").hide(0).delay(1000).fadeIn(6000);


// // Women and Men pages: enlargement of thumbnails on clicking
//         $("body").on("contextmenu", ".enlarged-image", function() {
//           return false;
//         });

//         $(".thumbnail").click(function() {
//           $("body").css("overflow", "hidden");
//           $(".lightbox .enlarged-image").attr("src", $(this).attr("src"));
//           $(".lightbox").show();
//         });

// // Women and Men pages: Returns enlarged image to previous size
//         $(".close").click(function() {
//           $("body").css("overflow", "");
//           $(".lightbox .enlarged-image").attr("src", "");
//           $(".lightbox").hide();
//         });
      });


