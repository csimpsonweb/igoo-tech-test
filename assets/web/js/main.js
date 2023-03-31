$( document ).ready(function() {
    console.log( "ready!" );

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            1000:{
                items:1
            }
        }
    })
});
