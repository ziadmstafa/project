let meun=document.querySelector('#meun');
let nav=document.querySelector('.nav');
meun.onclick = () => {
    meun.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.pageYOffset;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
    }
  });
  let header=document.querySelector('header');
 header.classList.toggle('sticky',window.scrollY > 100);  
 meun.classList.remove('bx-x');
 nav.classList.remove('active');
};

    ScrollReveal({ reset: true,
    distance :'80px',
    duration : 2000,
    delay : 200
    });
    ScrollReveal().reveal('.home-content, .hedeng', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-contenr ,  .content form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img ,.bj', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content ,.fwe, .bj', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: ['موسسه صدأ الشرق للخدمات اللوجستية'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true
});
// auto slide
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
setInterval(() => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}, 6000);

// slide to specific item
const carousel = document.querySelector('#default-carousel');
carousel.addEventListener('click', (event) => {
    const slideTo = event.target.dataset.carouselSlideTo;
    if (slideTo !== undefined) {
        carousel.querySelector('.carousel-item.active').classList.remove('active');
        carousel.querySelectorAll('.carousel-item')[slideTo].classList.add('active');
    }
});


carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => {
    const activeSlide = carousel.querySelector('.carousel-item.active');
    const prevSlide = activeSlide.previousElementSibling || activeSlide.parentNode.lastElementChild;
    activeSlide.classList.remove('active');
    prevSlide.classList.add('active');
});
carousel.querySelector('[data-carousel-next]').addEventListener('click', () => {
    const activeSlide = carousel.querySelector('.carousel-item.active');
    const nextSlide = activeSlide.nextElementSibling || activeSlide.parentNode.firstElementChild;
    activeSlide.classList.remove('active');
    nextSlide.classList.add('active');
});
