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
  let particlesInitialized = false;

  hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Initialize particles.js when the menu is shown
    if (navLinks.classList.contains("show") && !particlesInitialized) {
      particlesInitialized = true;
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 120, // Increased particle count for a denser effect
            density: {
              enable: true,
              value_area: 1000, // Control particle density area
            },
          },
          color: {
            value: ["#ff0000", "#00ff00", "#0000ff", "#ff8800", "#8800ff"], // Multi-colored particles for visual variety
          },
          shape: {
            type: ["circle", "triangle", "polygon"], // Multiple shapes for diversity
            stroke: {
              width: 1,
              color: "#ffffff", // Stroke color for particle borders
            },
            polygon: {
              nb_sides: 6, // Hexagon for polygon shapes
            },
          },
          opacity: {
            value: 0.7,
            random: true, // Randomize opacity for more variety
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true, // Randomized sizes for particles
            anim: {
              enable: true,
              speed: 5,
              size_min: 0.5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 120, // Shorter distance for links between particles
            color: "#ffffff",
            opacity: 0.4,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 4, // Moderate speed for particle movement
            direction: "none",
            random: true, // Random direction for particle movement
            straight: false,
            out_mode: "out", // Particles move out of the screen when leaving
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: ["grab", "bubble"], // Combining multiple hover modes
            },
            onclick: {
              enable: true,
              mode: "repulse", // Repulse particles on click
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 250,
              line_linked: {
                opacity: 0.6,
              },
            },
            bubble: {
              distance: 200,
              size: 8,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      navLinks.classList.remove("show");
    }
  });

  $(".nav-link-part").each(function () {
    if (this.href === window.location.href.split("#")[0]) {
      $(this).addClass("active");
    }
  });

  $(".nav-link-part").click(function (e) {
    $(".nav-link-part").removeClass("active");
    $(this).addClass("active");
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

window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

const exploreWall = document.getElementById("wallpaper-sec-nav");

exploreWall.addEventListener("click", function () {
  window.location.href = "pages/wallpaper.html";
});
