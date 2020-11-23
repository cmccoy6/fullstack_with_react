$(document).ready(function() {
     // Carousel 
    $("#mycarousel").carousel( {interval: 2000} );
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("span").hasClass('fa-pause'))
        {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');  
        }
        else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');  
            }
    });

    // Reserve Modal
    $("#reserveTable").click(function() {
        $("#reservationModal").modal('toggle');
    });
    $("button.escape").click(function() {
        $("#reservationModal").modal('hide');
    });

    // Login Modal
    $("#login").click(function() {
        $("#loginModal").modal('toggle');
    });
    $("button.escape").click(function() {
        $("#loginModal").modal('hide');
    });

});