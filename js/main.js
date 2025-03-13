$(function () {
  $(window).on("load", function () {
    new WOW().init();
  });
}); //wow plugin 초기화

$(function () {
  //var
  var $header = $("header");
  var $mnu = $("header>.container>nav>.gnb>li>a");
  var $tag = $("#aboutme>.content1-right>.tag>ul>li>a");
  var scrollTop = 0;
  var nowIdx = 0;
  var arrTopVal = [];

  $("section").each(function (idx) {
    arrTopVal[idx] = $(this).offset().top;
  });

  //header
  $mnu.on("click", function (event) {
    event.preventDefault();
    nowIdx = $mnu.index(this);

    $mnu.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
    $("html,body").stop().animate(
      {
        scrollTop: arrTopVal[nowIdx],
      },
      500,
      "easeInOutCubic"
    );
  });
}); //end of header handler

$(function () {
  var $list = $(".webproject>.container>.mnu>li>a");
  var $listImg = $(".webproject>.container>.view>li");
  var $viewOpen = $(".viewOpen");
  var $viewClose = $(".viewClose");
  var $viewImg = $(".webproject>.portfolio_bg>.portfolio_img");
  var $view = $(".webproject>.portfolio_bg");

  var nowIdx = 0;

  //portfolio
  $list.on("click", function (event) {
    event.preventDefault();
    nowIdx = $list.index(this);

    $list.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");

    $listImg.fadeOut();
    $listImg.eq(nowIdx).fadeIn();
  });

  $viewOpen.on("click", function (event) {
    event.preventDefault();
    var src = $(this).attr("href");

    $viewImg.find("a").css({
      backgroundImage: "url(" + src + ")",
    });

    $viewImg.parent().fadeIn();
  });

  $viewClose.on("click", function (event) {
    event.preventDefault();
    $viewImg.scrollTop(0);
    $view.fadeOut();
  });

  $view.on("click", function () {
    $viewImg.scrollTop(0);
    $view.fadeOut();
  });
  //end of portfolio
}); //end of section handler
