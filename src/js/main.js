/*############### SHOW MENU ###############*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
};

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
};

/*############### REMOVE MENU MOBILE ###############*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
};

navLink.forEach(n => n.addEventListener("click", linkAction));

/*############### CHANGE BACKGROUND HEADER ###############*/
const scrollHeard = () => {
    const header = document.getElementById("header");

    this.scrollY >=50 ? header.classList.add("scroll-header")
                      : header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeard);

/*############### SCROLL REVEAL ANIMATION ###############*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__info, .newsletter__container`)
sr.reveal(`.home__image`,{interval: 100, origin: 'bottom'})
sr.reveal(`.home__task`,{origin: 'left'})
sr.reveal(`.home__data`,{delay: 600,origin: 'right'})