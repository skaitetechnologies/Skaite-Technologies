/*=========================================================
    SCROLL REVEAL ANIMATION
=========================================================*/

const revealElements = document.querySelectorAll(

    ".hero-content,\
    .hero-image,\
    .about-image,\
    .about-content,\
    .service-card,\
    .solution-card,\
    .why-card,\
    .process-card,\
    .quick-card"

);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);