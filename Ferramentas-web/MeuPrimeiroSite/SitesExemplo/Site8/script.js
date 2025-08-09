// Toggle Navigation for Mobile
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
});

// Carousel Effect for Reviews
let currentIndex = 0;

function carousel() {
    const reviews = document.querySelectorAll('.review-card');
    reviews.forEach((review, index) => {
        review.style.transform = `translateX(${(index - currentIndex) * 300}px)`;
    });

    currentIndex = (currentIndex + 1) % reviews.length;
}

setInterval(carousel, 3000);

// Hero Section Animation
window.addEventListener('scroll', function () {
    const heroContent = document.querySelector('.hero-content');
    let value = window.scrollY;
    heroContent.style.transform = `translateY(${value * 0.5}px)`;
});
