const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      link = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});
overlay.addEventListener('click', () => {
    menu.classList.remove('active')
});
link.addEventListener('click', () => {
    menu.classList.remove('active')
});

const counters = document.querySelectorAll('.skills_progress-subtitle'),
      lines = document.querySelectorAll('.skills__progress-rectangle-band-active');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
