// setas.js

const minWidthForScript = 200;
const windowWidth = window.innerWidth;

if (windowWidth >= minWidthForScript) {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const carousel = document.getElementById('carousel');
    const projetos = document.querySelectorAll('.projetos__01, .projetos__02, .projetos__03, .projetos__04, .projetos__05');

    let currentSlide = 0;
    const totalSlides = projetos.length;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        scrollToSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        scrollToSlide(currentSlide);
    }

    function scrollToSlide(slideIndex) {
        const slideWidth = projetos[0].getBoundingClientRect().width;
        carousel.scrollLeft = slideWidth * slideIndex;
    }

    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);
}
