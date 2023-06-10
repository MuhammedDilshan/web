// parallax-about-image
var body = document.body;
var avatar = document.getElementsByClassName("about-img");
var $image = $(".about-img");
window.onscroll = function () {
  parallaxFunction();
};

function parallaxFunction() {
  if ($(window).scrollTop() > 580) {
    $image.css({ top: +$(window).scrollTop() / 10 + "px" });
  } else {
    $image.css({ top: +$(window).scrollTop() / 10 + "px" });
  }
}
// end-parallax

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
