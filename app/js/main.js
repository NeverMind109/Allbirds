$(function () {
  $(".collections__carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    prevArrow:
      '<button class="slider-section__slider-btn slider-section__slider-prev"><img class="slider-section__slider-btn-img" src="images/slider-prev-btn.svg" alt=""></button>',
    nextArrow:
      '<button class="slider-section__slider-btn slider-section__slider-next"><img class="slider-section__slider-btn-img" src="images/slider-next-btn.svg" alt=""></button>',
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
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          autoplaySpeed: 1500,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".arrivals__carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    prevArrow:
      '<button class="slider-section__slider-btn slider-section__slider-prev"><img class="slider-section__slider-btn-img" src="images/slider-prev-btn.svg" alt=""></button>',
    nextArrow:
      '<button class="slider-section__slider-btn slider-section__slider-next"><img class="slider-section__slider-btn-img" src="images/slider-next-btn.svg" alt=""></button>',
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
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          autoplaySpeed: 1500,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
          slidesToShow: 1,
        },
      },
    ],
  });
});
