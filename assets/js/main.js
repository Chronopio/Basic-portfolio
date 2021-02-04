const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const menuLenght = navItems.length;
const currentLocation = window.location.href;
const navLinks = document.querySelectorAll('.menu-nav__link');

let showMenu = false;

let toggleMenu = () => {
    if (!showMenu) {   
        hamburger.classList.add('open');
        nav.classList.add('open');
        menu.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menu.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}


menuBtn.addEventListener('click', toggleMenu);

// Active page highlight
for (let i = 0; i < menuLenght; i++) {
    if (navLinks[i].href === currentLocation) {
        navItems[i].classList.add('active');
    } else {
        navItems[i].classList.remove('active')
    }
}