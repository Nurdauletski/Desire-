$(function () {
    $('.header__btn').on('click', () => {
        $('.rightside-menu').removeClass('rightside-menu--close');
    })
    $('.rightside-menu__close').on('click', () => {
        $('.rightside-menu').addClass('rightside-menu--close');
    })
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true
    }); 
    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
    }); 
    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/right-slide-arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/left-slide-arrow.svg" alt=""></button>'
    }); 


    let mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });
})