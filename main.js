document.addEventListener("DOMContentLoaded", function () {
    let search = document.querySelector('.search-box');
    let cart = document.querySelector('.cart');
    let user = document.querySelector('.user');
    let navbar = document.querySelector('.navbar');

    document.querySelector('#search-icon').onclick = () => {
        search.classList.toggle('active');
        cart.classList.remove('active');
        user.classList.remove('active'); 
        navbar.classList.remove('active');// Ensuring only one opens at a time
    }

    document.querySelector('#cart-icon').onclick = () => {
        cart.classList.toggle('active');
        search.classList.remove('active');
        user.classList.remove('active');
        navbar.classList.remove('active'); // Ensuring only one opens at a time
    }

    document.querySelector('#user-icon').onclick = () => {
        user.classList.toggle('active');
        cart.classList.remove('active');
        search.classList.remove('active');
        navbar.classList.remove('active'); // Ensuring only one opens at a time
    }
    document.querySelector('#menu-icon').onclick = () => {
        navbar.classList.toggle('active');
        search.classList.remove('active');
        cart.classList.remove('active');
        user.classList.remove('active'); // Ensuring only one opens at a time
    }
//Navbar scroll
let header = document.querySelector('header');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow', window.scrolly > 0);
});
    // Swiper
    var swiper = new Swiper(".new-arrival", {
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        centeredSlides: true, // Fixed typo here
        breakpoints: {
            0: {
                slidesPerView: 0, // Changed from 0 to 1
            },
            568: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1020: {
                slidesPerView: 3,
            },
        },
    });
});
