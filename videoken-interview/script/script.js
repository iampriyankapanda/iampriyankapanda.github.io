$('.testimonials-slider_js').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: false,
    dots: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 2,
        },
        1200: {
            items: 2,
        }
    }
});
$('.banner-slider_js').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    nav: true,
    dots: false,
    responsiveClass: true,
    items: 1,
});
$('.banner-wrapper .owl-theme .owl-nav .owl-prev').html('<i class="fas fa-angle-left"></i>');
$('.banner-wrapper .owl-theme .owl-nav .owl-next').html('<i class="fas fa-angle-right"></i>');

$('.show_menu_js').click(function(){
    $('.header-links').addClass('active');
});

$('.close_menu_js').click(function(){
    $('.header-links').removeClass('active');
});