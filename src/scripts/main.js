import $ from 'jquery';

$(document).ready(function () {
  $('.center').slick({
    autoplaySpeed: 0,
    autoplay: false,
    infinite: false,
    centerMode: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          adaptiveHeight: true,
          centerMode: true,
          dots: true,
          arrows: false,
          draggable: false,
          lazyLoad: 'eager',
          centerPadding: '15px',
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: true,
          centerMode: true,
          arrows: false,
          draggable: false,
          lazyLoad: 'eager',
          centerPadding: '10px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
