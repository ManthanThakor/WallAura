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
  $(document).ready(function () {
    $("#hamburger-menu").click(function () {
      $("#nav-links").toggleClass("show");
    });
  });
});
