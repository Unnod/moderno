$(function () {



    $(".stars").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true

    });

    $('.products-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.header__menu-btn').on('click', function(){
        $('.menu-list').slideToggle();
    });

    $('.header__top-btn').on('click', function(){
        $('.header__box').toggleClass('active');
    });

    var mixer = mixitup('.products__inner-box');

});