$(document).ready(function () {
    let currentSlide = 0;
    const slides = $('.carousel-slide');
    const dots = $('.dot');
    const totalSlides = slides.length;
    let slideInterval;

    function showSlide(index) {
        slides.removeClass('active').eq(index).addClass('active');
        dots.removeClass('active').eq(index).addClass('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    $('.next').click(function () {
        nextSlide();
        resetInterval();
    });

    $('.prev').click(function () {
        prevSlide();
        resetInterval();
    });

    $('.dot').click(function () {
        currentSlide = $(this).index();
        showSlide(currentSlide);
        resetInterval();
    });

    function startInterval() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    showSlide(currentSlide);
    startInterval();
});







// floating banner start



$(document).ready(function () {


    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();


        $('.floating-items i').each(function (i) {
            var speed = 0.1 + (i * 0.05);
            var y = -(scrolled * speed);
            var x = scrolled * speed / 2;
            $(this).css('transform', 'translate(' + x + 'px, ' + y + 'px)');
        });

    });

});
