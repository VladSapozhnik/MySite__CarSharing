$(function(){

  $('.top__slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: false
      }
    },
    ]
  });

  $('.reviews__slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
   responsive: [
    {
      breakpoint: 1141,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 846,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 585,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
    ]
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });
});

