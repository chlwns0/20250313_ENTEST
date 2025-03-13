$(document).ready(function () {
  function toggleCardMo() {
    if ($(window).width() < 1400) {
      $("#card_mo").css("display", "flex");
    } else {
      $("#card_mo").css("display", "none");
    }
  }

  toggleCardMo();
  $(window).on("resize", function () {
    toggleCardMo();
    $(".card_slide").slick("setPosition");
  });

  $(".card_slide").slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (slider, i) {
      return '<button class="custom-dot"></button>';
    },
    responsive: [
      {
        breakpoint: 809,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
