gsap.registerPlugin(ScrollTrigger);


/* ==========================================
   LOADER
========================================== */

const loaderNumber =
    document.querySelector(".loader-number");

const loaderProgress =
    document.querySelector(".loader-progress");

let progress = 0;


const loadingInterval = setInterval(() => {

    progress += Math.floor(Math.random() * 9) + 2;


    if (progress >= 100) {

        progress = 100;

        clearInterval(loadingInterval);


        setTimeout(() => {

            closeLoader();

        }, 300);

    }


    loaderNumber.textContent = `${progress}%`;

    loaderProgress.style.width = `${progress}%`;

}, 65);



function closeLoader() {

    const timeline = gsap.timeline();

    timeline.to(".loader-name", {
        scale: 1.3,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in"
    });

    timeline.to(".loader", {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        duration: 1.2,
        ease: "power4.inOut",
        onComplete: () => {
            document.querySelector(".loader").style.display = "none";
        }
    });

    timeline.from(".hero-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 0.6
    });

    timeline.from(".title-line", {
        y: 180,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
    }, "-=0.3");

    timeline.from(".hero-tagline", {
        x: -80,
        opacity: 0,
        duration: 0.8
    }, "-=0.5");

    timeline.from(".hero-bottom", {
        y: 50,
        opacity: 0,
        duration: 0.7
    }, "-=0.5");
}



/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor =
    document.querySelector(".cursor");

const cursorRing =
    document.querySelector(".cursor-ring");


window.addEventListener("mousemove", event => {

    gsap.to(cursor, {

        x: event.clientX - 4,

        y: event.clientY - 4,

        duration: 0.05

    });


    gsap.to(cursorRing, {

        x: event.clientX - 19,

        y: event.clientY - 19,

        duration: 0.35,

        ease: "power2.out"

    });

});


document
    .querySelectorAll("a, button, .skill-item")
    .forEach(element => {


        element.addEventListener("mouseenter", () => {

            gsap.to(cursorRing, {

                scale: 1.8,

                borderColor: "#e62429",

                duration: 0.3

            });

        });


        element.addEventListener("mouseleave", () => {

            gsap.to(cursorRing, {

                scale: 1,

                borderColor:
                    "rgba(255,255,255,0.6)",

                duration: 0.3

            });

        });

    });



/* ==========================================
   HERO PARALLAX
========================================== */

gsap.to(".hero-title", {

    scale: 1.35,

    opacity: 0,

    y: -100,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


gsap.to(".hero-web", {

    rotation: 35,

    scale: 1.5,

    opacity: 0,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


gsap.to(".hero-shape-red", {

    x: 300,

    y: -150,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});



/* ==========================================
   QUOTE ANIMATION
========================================== */

document
    .querySelectorAll(".quote-content h2 span")
    .forEach((line, index) => {


        gsap.from(line, {

            xPercent:
                index % 2 === 0
                    ? -100
                    : 100,

            opacity: 0,

            scrollTrigger: {

                trigger: ".quote-section",

                start: "top 80%",

                end: "center center",

                scrub: 1

            }

        });

    });


gsap.to(".quote-web", {

    rotation: 60,

    scrollTrigger: {

        trigger: ".quote-section",

        start: "top bottom",

        end: "bottom top",

        scrub: 1

    }

});



/* ==========================================
   ABOUT
========================================== */

gsap.from(".about-heading h2", {

    y: 150,

    opacity: 0,

    scrollTrigger: {

        trigger: ".about",

        start: "top 70%",

        end: "top 25%",

        scrub: 1

    }

});


gsap.from(".about-intro", {

    x: -100,

    opacity: 0,

    scrollTrigger: {

        trigger: ".about-grid",

        start: "top 85%",

        end: "top 50%",

        scrub: 1

    }

});


gsap.from(".about-details", {

    x: 100,

    opacity: 0,

    scrollTrigger: {

        trigger: ".about-grid",

        start: "top 85%",

        end: "top 50%",

        scrub: 1

    }

});



/* ==========================================
   SKILLS
========================================== */

gsap.from(".skills-heading h2", {

    xPercent: -40,

    opacity: 0,

    scrollTrigger: {

        trigger: ".skills",

        start: "top 75%",

        end: "top 30%",

        scrub: 1

    }

});


document
    .querySelectorAll(".skill-item")
    .forEach((item, index) => {


        gsap.from(item, {

            x:
                index % 2 === 0
                    ? -100
                    : 100,

            opacity: 0,

            scrollTrigger: {

                trigger: item,

                start: "top 90%",

                end: "top 65%",

                scrub: 1

            }

        });

    });



/* ==========================================
   PROJECTS — SMOOTH EARLY REVEAL
========================================== */

gsap.from(".projects-heading h2", {
    xPercent: -20,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".projects-heading",
        start: "top 85%",
        toggleActions: "play none none reverse"
    }
});


document.querySelectorAll(".project-card").forEach((card) => {

    const visual = card.querySelector(".project-visual");
    const title = card.querySelector(".project-visual h3");
    const number = card.querySelector(".project-number");
    const web = card.querySelector(".project-web");
    const info = card.querySelector(".project-info");

    /*
       Card reveal timeline.
       Starts as soon as the card enters the viewport.
    */

    const revealTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none reverse"
        }
    });

    revealTimeline.fromTo(
        visual,
        {
            clipPath: "inset(12% 0 12% 0)",
            opacity: 0,
            y: 60
        },
        {
            clipPath: "inset(0% 0 0% 0)",
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out"
        }
    );

    revealTimeline.fromTo(
        title,
        {
            y: 80,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        },
        "-=0.55"
    );

    revealTimeline.fromTo(
        info,
        {
            y: 35,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out"
        },
        "-=0.35"
    );


    /*
       Keep only decorative effects tied to scroll.
       This makes the animation feel much smoother.
    */

    gsap.to(number, {
        yPercent: -15,
        ease: "none",

        scrollTrigger: {
            trigger: visual,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5
        }
    });


    gsap.to(web, {
        rotation: 45,
        scale: 1.2,
        ease: "none",

        scrollTrigger: {
            trigger: visual,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
        }
    });

});



/* ==========================================
   ACTION TRANSITION
========================================== */

document
    .querySelectorAll(".action-text span")
    .forEach((line, index) => {


        gsap.from(line, {

            xPercent:
                index % 2 === 0
                    ? -100
                    : 100,

            scrollTrigger: {

                trigger: ".action-section",

                start: "top 80%",

                end: "center center",

                scrub: 1

            }

        });

    });


gsap.to(".action-web", {

    rotation: 180,

    scale: 1.5,

    scrollTrigger: {

        trigger: ".action-section",

        start: "top bottom",

        end: "bottom top",

        scrub: 1

    }

});



/* ==========================================
   EXPERIENCE
========================================== */

gsap.from(".experience-heading h2", {

    xPercent: -40,

    opacity: 0,

    scrollTrigger: {

        trigger: ".experience",

        start: "top 75%",

        end: "top 30%",

        scrub: 1

    }

});


gsap.from(".experience-card > h3", {

    y: 150,

    opacity: 0,

    scrollTrigger: {

        trigger: ".experience-card",

        start: "top 75%",

        end: "top 30%",

        scrub: 1

    }

});


gsap.from(".experience-details p", {

    y: 80,

    opacity: 0,

    stagger: 0.15,

    scrollTrigger: {

        trigger: ".experience-details",

        start: "top 90%",

        end: "top 60%",

        scrub: 1

    }

});



/* ==========================================
   EDUCATION
========================================== */

gsap.from(".education-heading h2", {

    xPercent: -40,

    opacity: 0,

    scrollTrigger: {

        trigger: ".education",

        start: "top 75%",

        end: "top 30%",

        scrub: 1

    }

});


document
    .querySelectorAll(".education-item")
    .forEach((item, index) => {


        gsap.from(item, {

            x:
                index % 2 === 0
                    ? -100
                    : 100,

            opacity: 0,

            scrollTrigger: {

                trigger: item,

                start: "top 90%",

                end: "top 65%",

                scrub: 1

            }

        });

    });



/* ==========================================
   CONTACT
========================================== */

gsap.from(".contact h2", {

    y: 180,

    opacity: 0,

    scrollTrigger: {

        trigger: ".contact",

        start: "top 70%",

        end: "top 25%",

        scrub: 1

    }

});


gsap.to(".contact-web", {

    rotation: 90,

    scale: 1.3,

    scrollTrigger: {

        trigger: ".contact",

        start: "top bottom",

        end: "bottom top",

        scrub: 1

    }

});



/* ==========================================
   REFRESH SCROLLTRIGGER
========================================== */

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});