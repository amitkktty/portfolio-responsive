// Typed.js animation
var typed = new Typed('#element', {
    strings: ['Software Developer', 'ReactJS Developer', 'Frontend Developer', 'Web Developer.'],
    typeSpeed: 70,
    loop: true
});

// Project Slider
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const container = document.querySelector('.img-container');
const images = document.querySelectorAll('.pr-img');

let index = 0;

function showSlide(i) {
    if (i >= images.length) index = 0;
    if (i < 0) index = images.length - 1;
    container.style.transform = `translateX(${-index * 100}%)`;
}

next.addEventListener('click', () => {
    index++;
    showSlide(index);
});

prev.addEventListener('click', () => {
    index--;
    showSlide(index);
});

setInterval(() => {
    index++;
    showSlide(index);
}, 3000);