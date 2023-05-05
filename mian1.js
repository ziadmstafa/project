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
    ScrollReveal().reveal('.home-img, .services-contenr , .Protofolio-box , .content form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content .fwe', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: ['شركه شحن'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true
});