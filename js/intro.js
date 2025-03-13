$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev">&#10094;</button>',
    nextArrow: '<button class="slick-next">&#10095;</button>',
  });
});
