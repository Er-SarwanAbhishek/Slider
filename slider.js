let slideIndex = 2; // Start from the "Late 1980s"
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slides img');
    let labels = document.querySelectorAll('.labels .label');
    let progressBar = document.getElementById('sliderProgress');

    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    labels.forEach(label => label.classList.remove('active'));

    slides[slideIndex-1].classList.add('active');
    labels[slideIndex-1].classList.add('active');
    progressBar.value = slideIndex;
}
