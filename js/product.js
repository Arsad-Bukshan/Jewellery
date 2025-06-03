$(document).ready(function () {

    let currentSlide = 0;
    const slides = $('.carousel-slide');
    const dots = $('.dot');
    const totalSlides = slides.length;
    let autoPlayInterval;


    function initCarousel() {

        $(slides[currentSlide]).addClass('active');
        $(dots[currentSlide]).addClass('active');


        startAutoPlay();
    }


    function nextSlide() {
        goToSlide((currentSlide + 1) % totalSlides);
    }


    function prevSlide() {
        goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
    }


    function goToSlide(slideIndex) {

        $(slides[currentSlide]).removeClass('active');
        $(dots[currentSlide]).removeClass('active');


        currentSlide = slideIndex;

        $(slides[currentSlide]).addClass('active');
        $(dots[currentSlide]).addClass('active');
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }


    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    $('.next').click(function () {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });

    $('.prev').click(function () {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    });


    $('.dot').click(function () {
        stopAutoPlay();
        const dotIndex = $(this).index();
        goToSlide(dotIndex);
        startAutoPlay();
    });

    $('.hero-carousel').hover(
        function () { stopAutoPlay(); },
        function () { startAutoPlay(); }
    );


    let touchStartX = 0;
    let touchEndX = 0;

    $('.hero-carousel').on('touchstart', function (e) {
        touchStartX = e.originalEvent.touches[0].clientX;
    });

    $('.hero-carousel').on('touchend', function (e) {
        touchEndX = e.originalEvent.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            stopAutoPlay();
            if (swipeDistance > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            startAutoPlay();
        }
    }


    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // Left arrow
                stopAutoPlay();
                prevSlide();
                startAutoPlay();
                break;
            case 39: // Right arrow
                stopAutoPlay();
                nextSlide();
                startAutoPlay();
                break;
        }
    });

    initCarousel();
});
