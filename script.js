let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }
    const carouselSlide = document.querySelector('.carousel-slide');
    const width = slides[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-slideIndex * width}px)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

showSlide(slideIndex);
