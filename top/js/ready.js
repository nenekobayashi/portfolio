$(function() {
    $('#mainVisualContents').slick({
        arrow: true,
        dots: true,
        slideToShow: 1,
        infinite: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 4000,
        speed: 1000,
        prevArrow: '<span class="slick-prev">&lt;</span>',
        nextArrow: '<span class="slick-next">&gt;</span>'
    });
});