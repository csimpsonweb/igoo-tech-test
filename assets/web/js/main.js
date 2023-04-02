$( document ).ready(function(config, node) {
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1
            }
        }
    })

    $(".fabric").click(function(){
        $(".fabric-dropdown").toggle();
    });

    $(".colour").click(function(){
        $(".colour-dropdown").toggle();
    });

    $(".finish").click(function(){
        $(".finish-dropdown").toggle();
    });

    $(".optional").click(function(){
        $(".optional-dropdown").toggle();
    });
});
