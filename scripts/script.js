$(document).ready(function () {
  var scrollDistance = 100;

  $(window).scroll(function () {
    console.log($(this).scrollTop());
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
