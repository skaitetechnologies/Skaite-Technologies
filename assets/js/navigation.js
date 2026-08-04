/*=========================================================
    SKAITE TECHNOLOGIES
    NAVIGATION
=========================================================*/

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

/*=========================================================
    STICKY HEADER
=========================================================*/

function updateHeader() {

    if (header) {

        header.classList.toggle("scrolled", window.scrollY > 50);

    }

}

/*=========================================================
    MOBILE MENU
=========================================================*/

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}

/*=========================================================
    CLOSE MENU AFTER CLICK
=========================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar && menuToggle) {

            navbar.classList.remove("active");
            menuToggle.classList.remove("active");

        }

    });

});

/*=========================================================
    ACTIVE MENU ON SCROLL
=========================================================*/

function updateActiveMenu() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

/*=========================================================
    SMOOTH SCROLL
=========================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 80,
            behavior: "smooth"

        });

    });

});

/*=========================================================
    ESC KEY CLOSE
=========================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && navbar && menuToggle) {

        navbar.classList.remove("active");
        menuToggle.classList.remove("active");

    }

});

/*=========================================================
    CLICK OUTSIDE CLOSE
=========================================================*/

document.addEventListener("click", (e) => {

    if (
        navbar &&
        menuToggle &&
        navbar.classList.contains("active") &&
        !navbar.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        navbar.classList.remove("active");
        menuToggle.classList.remove("active");

    }

});

/*=========================================================
    WINDOW EVENTS
=========================================================*/

window.addEventListener("scroll", () => {

    updateHeader();
    updateActiveMenu();

});

window.addEventListener("load", () => {

    updateHeader();
    updateActiveMenu();

});