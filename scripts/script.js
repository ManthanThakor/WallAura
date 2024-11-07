$(document).ready(function () {
  $(".Clients-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    // infinite: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: "20px",
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
tsParticles.load({
  id: "tsparticles",
  options: {
    fullScreen: {
      zIndex: 1,
    },
    emitters: [
      {
        position: {
          x: 0,
          y: 30,
        },
        rate: {
          quantity: 5,
          delay: 0.15,
        },
        particles: {
          move: {
            direction: "top-right",
            outModes: {
              top: "none",
              left: "none",
              default: "destroy",
            },
          },
        },
      },
      {
        position: {
          x: 100,
          y: 30,
        },
        rate: {
          quantity: 5,
          delay: 0.15,
        },
        particles: {
          move: {
            direction: "top-left",
            outModes: {
              top: "none",
              right: "none",
              default: "destroy",
            },
          },
        },
      },
    ],
    particles: {
      color: {
        value: ["#ffffff", "#FF0000"],
      },
      move: {
        decay: 0.05,
        direction: "top",
        enable: true,
        gravity: {
          enable: true,
        },
        outModes: {
          top: "none",
          default: "destroy",
        },
        speed: {
          min: 10,
          max: 50,
        },
      },
      number: {
        value: 0,
      },
      opacity: {
        value: 1,
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: "random",
        animation: {
          enable: true,
          speed: 30,
        },
      },
      tilt: {
        direction: "random",
        enable: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 30,
        },
      },
      size: {
        value: {
          min: 0,
          max: 2,
        },
        animation: {
          enable: true,
          startValue: "min",
          count: 1,
          speed: 16,
          sync: true,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 5,
          max: 15,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        speed: {
          min: -7,
          max: 7,
        },
      },
      shape: {
        type: ["circle", "square"],
        options: {},
      },
    },
  },
});
