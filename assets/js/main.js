window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        setTimeout(() => {
            preloader.remove();
        }, 400);

    }

});

/*=========================================================
    BACK TO TOP
=========================================================*/

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}