let slideIndex = 0;
const slides = document.querySelectorAll('.f-slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        slide.classList.remove('active-slide');
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'flex';
    slides[slideIndex - 1].classList.add('active-slide');

    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', showSlides);

document.getElementById('menuIcon').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'block';
    }
});
