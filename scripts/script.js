$(document).ready(function () {
  $(".Clients-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: "40px",
    prevArrow: $(".custom-prev"),
    nextArrow: $(".custom-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  var scrollDistance = 100;

  $(window).scroll(function () {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > scrollDistance) {
      $(".navbar-sec").addClass("navbar-sticky");
    } else {
      $(".navbar-sec").removeClass("navbar-sticky");
    }
  });
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");

  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      navLinks.classList.remove("show");
    }
  });
});

function closeMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.remove("show");
}
document.getElementById("current-year").textContent = new Date().getFullYear();

window.addEventListener("beforeunload", function () {
  document.getElementById("loader").style.display = "flex";
});

// Ensure the loader hides once the page is fully loaded
window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});
