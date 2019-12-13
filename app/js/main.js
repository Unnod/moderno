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
        dots: true,
        responsive: [
            {
              breakpoint: 1900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 1441,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
            },
            {
                breakpoint: 801,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
        ]
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.header__menu-btn').on('click', function () {
        $('.menu-list').slideToggle();
    });

    $('.header__top-btn').on('click', function () {
        $('.header__box').toggleClass('active');
    });

    $('.product__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.icon-th-list').on('click',function(){
        $('.products__item').addClass('list');
        $('.icon-th-large').removeClass('active');
        $('.icon-th-list').addClass('active');
    });

    $('.icon-th-large').on('click',function(){
        $('.products__item').removeClass('list');
        $('.icon-th-list').removeClass('active');
        $('.icon-th-large').addClass('active');
    });

    $('input[type="file"], select').styler();

   
    var mixer = mixitup('.products__inner-box');

});