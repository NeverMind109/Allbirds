$(function () {
  $(".collections__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    prevArrow:
      '<button class="collections__slider-btn collections__slider-prev"><img class="collections__slider-btn-img" src="images/slider-prev-btn.svg" alt=""></button>',
    nextArrow:
      '<button class="collections__slider-btn collections__slider-next"><img class="collections__slider-btn-img" src="images/slider-next-btn.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 763,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          autoplaySpeed: 1000,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1000,
          slidesToShow: 1,
        },
      },
    ],
  });
});
