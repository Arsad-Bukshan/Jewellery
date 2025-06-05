//  nav start


let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');
let overlay = document.querySelector('.overlay');
let navLinks = document.querySelectorAll('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

overlay.addEventListener('click', closeMobileMenu);
function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

window.addEventListener('scroll', () => {
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    }
});


// nav end 




// cursor start 


let cursorDot = document.querySelector('.cursor-dot');

window.addEventListener('mousemove', e => {
    cursorDot.style.top = `${e.clientY}px`;
    cursorDot.style.left = `${e.clientX}px`;
});


// cursor end
