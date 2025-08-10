document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      toggleBtn.innerHTML = '<i class="fas fa-moon" style="color: black;"></i>';
    } else {
      toggleBtn.innerHTML = '<i class="fas fa-sun" style="color: #0077ff;"></i>';
    }

    // Smooth scale animation
    const icon = toggleBtn.querySelector("i");
    icon.style.transition = "transform 0.4s ease, opacity 0.4s ease";
    icon.style.transform = "scale(1.3)";
    icon.style.opacity = "0.8";

    setTimeout(() => {
      icon.style.transform = "scale(1)";
      icon.style.opacity = "1";
    }, 50);
  });
});



/**--------------------------------------------------------------------------
    AOS - Scroll Animation
--------------------------------------------------------------------------**/
AOS.init();

AOS.init({
    duration: 600, // animation duration in ms
    once: false     // only animate once
});


/**--------------------------------------------------------------------------
    Navbar Unhide and Hide
--------------------------------------------------------------------------**/
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // scrolling down
    navbar.classList.add('hidden');
  } else {
    // scrolling up
    navbar.classList.remove('hidden');
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // avoid negative scroll
});




/**--------------------------------------------------------------------------
    Navbar Scroll 
--------------------------------------------------------------------------**/
  document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNavbar");

  function handleScroll() {
  if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent", "navbar-dark");
      navbar.classList.add("navbar-scroll");
  } else {
      navbar.classList.remove("navbar-scroll");
      navbar.classList.add("bg-transparent", "navbar-dark");
  }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run once on load in case the page isn't at the top
  });


  document.addEventListener("DOMContentLoaded", function () {
  const offcanvasElement = document.getElementById("offcanvasDarkNavbar");
  const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", function () {
      offcanvas.hide(); // Close the offcanvas
    });
  });
});


/**--------------------------------------------------------------------------
    Hero SkillSet Text Animation
--------------------------------------------------------------------------**/
 const words = [
  "a Freelancer",
  "an IT Support Admin.",
  "a UI/UX Designer",
  "a Data Analyst",
  "a Frontend Developer",
  "a Product Manager"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // typing speed
const pause = 1500; // pause between words
const element = document.getElementById("typed-text");

function typeEffect() {
  const current = words[wordIndex];
  if (isDeleting) {
  element.textContent = current.substring(0, charIndex--);
  } else {
  element.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length) {
  setTimeout(() => isDeleting = true, pause);
  } else if (isDeleting && charIndex === 0) {
  isDeleting = false;
  wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
}

typeEffect();


/**--------------------------------------------------------------------------
    Truncate Text
--------------------------------------------------------------------------**/
// Truncate,click to read more
const toggleBtn = document.getElementById("toggleBtn");
const textContent = document.getElementById("textContent");

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  textContent.classList.toggle("expanded");
  
  if (textContent.classList.contains("expanded")) {
    toggleBtn.textContent = "Show less";
  } else {
    toggleBtn.textContent = "Read more...";
  }
});


/**--------------------------------------------------------------------------
    Testimonials slider
--------------------------------------------------------------------------**/
const carousel = document.getElementById('carousel');
const indicators = document.getElementById('indicators').children;
const totalSlides = carousel.children.length;
let currentIndex = 0;

function updateIndicators(index) {
  Array.from(indicators).forEach((dot, i) => {
    dot.className = i === index ? 'active' : '';
  });
}

function showSlide(index) {
  const offset = index * -100;
  carousel.style.transform = `translateX(${offset}%)`;
  updateIndicators(index);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Auto-loop every 10 seconds
setInterval(nextSlide, 10000);
showSlide(currentIndex);


/**--------------------------------------------------------------------------
    Click outside to close image
--------------------------------------------------------------------------**/
const lightbox = GLightbox({
  selector: '.glightbox',
  closeOnOutsideClick: true, // This enables closing when clicking outside
  touchNavigation: true,
  loop: true
});


/**--------------------------------------------------------------------------
    Portfolio nav filter
--------------------------------------------------------------------------**/
// Initialize Isotope
const iso = new Isotope('.isotope-container', {
    itemSelector: '.isotope-item',
    layoutMode: 'masonry',
    filter: '*'
});

// Filter buttons
const filterButtons = document.querySelectorAll('.portfolio-filters li');

filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
    // Remove active class
    filterButtons.forEach(b => b.classList.remove('filter-active'));
    this.classList.add('filter-active');

    // Filter items
    const filterValue = this.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
    });
});






  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    // Wait exactly 5 seconds after page starts loading
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.pointerEvents = "none";

      // Fully remove it after transition (optional)
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500); // matches the CSS transition time
    }, 2000); // 2-second wait
  });

