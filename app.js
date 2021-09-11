
/*SCROLLING ANIMDATION OF WAVES*/
let wave1 = document.getElementById("wave1");
let wave2 = document.getElementById("wave2");
let wave3 = document.getElementById("wave3");
let wave4 = document.getElementById("wave4");
let wave5 = document.getElementById("wave5");
let wave6 = document.getElementById("wave6");
let wave7 = document.getElementById("wave7");
let wave8 = document.getElementById("wave8");

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
    wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
    wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
    wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
    wave5.style.backgroundPositionX = 400 + value * 4 + 'px';
    wave6.style.backgroundPositionX = 300 + value * -4 + 'px';
    wave7.style.backgroundPositionX = 200 + value * 2 + 'px';
    wave8.style.backgroundPositionX = 100 + value * -2 + 'px';
})

/*NAVIGATION SLIDE FUNCTION*/
const navSlide = () => {
    const navIcon = document.querySelector(".nav-icon");
    const nav = document.querySelector(".nav-links");
    const allNavLinks = document.querySelectorAll(".nav-links li");
    const iconToggle = document.querySelector(".nav-icon i");

    navIcon.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        allNavLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        });
        /*Toggle icon class*/
        if ($(iconToggle).hasClass("fa fa-bars")) {
            $(iconToggle).addClass("fas fa-times").removeClass("fa fa-bars");
        } else {
            $(iconToggle).addClass("fa fa-bars").removeClass("fas fa-times");
        }
    });



}
navSlide();