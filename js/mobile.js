$(document).ready(function () {
  const menuToggle = $(".menu-toggle");
  const navMenu = $(".nav-menu");

  menuToggle.on("click", function () {
    navMenu.toggleClass("active");
    menuToggle.toggleClass("open");
  });

  $(".nav-menu a").on("click", function () {
    navMenu.removeClass("active");
    menuToggle.removeClass("open");
  });

  window.addEventListener("load", function () {
    const video = document.getElementById("main-video");
    if (window.innerWidth <= 768) {
      video.removeAttribute("autoplay");
    } else {
      video.setAttribute("autoplay", "");
    }
  });
});
