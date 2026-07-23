gsap.registerPlugin(ScrollTrigger);


/* ==========================================
   LOADER
========================================== */

const loaderNumber = document.querySelector(".loader-number");

const loaderProgress = document.querySelector(".loader-progress");

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

}, 70);



function closeLoader() {

    const timeline = gsap.timeline();


    timeline.to(".loader-name", {

        y: -60,

        opacity: 0,

        duration: 0.5

    });


    timeline.to(".loader", {

        yPercent: -100,

        duration: 1,

        ease: "power4.inOut"

    });


    timeline.from(".hero-small", {

        y: 30,

        opacity: 0,

        duration: 0.7

    });


    timeline.from(".title-line", {

        y: 150,

        opacity: 0,

        stagger: 0.15,

        duration: 1,

        ease: "power4.out"

    }, "-=0.4");


    timeline.from(".hero-bottom", {

        y: 30,

        opacity: 0,

        duration: 0.7

    }, "-=0.5");

}



/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursor = document.querySelector(".cursor");

const follower = document.querySelector(".cursor-follower");


window.addEventListener("mousemove", event => {

    gsap.to(cursor, {

        x: event.clientX - 4,

        y: event.clientY - 4,

        duration: 0.05

    });


    gsap.to(follower, {

        x: event.clientX - 19,

        y: event.clientY - 19,

        duration: 0.35,

        ease: "power2.out"

    });

});



/* ==========================================
   HERO SCROLL
========================================== */

gsap.to(".hero-title", {

    scale: 1.5,

    opacity: 0,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});


gsap.to(".hero-bg-text", {

    xPercent: -20,

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: 1

    }

});



/* ==========================================
   TRANSITION TEXT
========================================== */

document
    .querySelectorAll(".transition-text span")
    .forEach((line, index) => {


        gsap.fromTo(

            line,

            {

                xPercent: index % 2 === 0 ? -100 : 100,

                opacity: 0

            },

            {

                xPercent: 0,

                opacity: 1,

                scrollTrigger: {

                    trigger: ".transition-section",

                    start: "top 80%",

                    end: "center center",

                    scrub: 1

                }

            }

        );

    });



/* ==========================================
   ABOUT
========================================== */

gsap.from(".about-content h2", {

    y: 150,

    opacity: 0,

    scrollTrigger: {

        trigger: ".about",

        start: "top 65%",

        end: "top 25%",

        scrub: 1

    }

});


gsap.from(".about-description p", {

    y: 80,

    opacity: 0,

    stagger: 0.15,

    scrollTrigger: {

        trigger: ".about-description",

        start: "top 85%",

        end: "top 50%",

        scrub: 1

    }

});



/* ==========================================
   SKILLS
========================================== */

gsap.from(".section-heading h2", {

    xPercent: -30,

    opacity: 0,

    scrollTrigger: {

        trigger: ".skills",

        start: "top 75%",

        end: "top 30%",

        scrub: 1

    }

});


document
    .querySelectorAll(".skill-card")
    .forEach(card => {


        gsap.from(card, {

            y: 100,

            opacity: 0,

            scrollTrigger: {

                trigger: card,

                start: "top 90%",

                end: "top 60%",

                scrub: 1

            }

        });

    });



/* ==========================================
   PROJECT HEADER
========================================== */

gsap.from(".projects-header h2", {

    xPercent: -50,

    opacity: 0,

    scrollTrigger: {

        trigger: ".projects-header",

        start: "top 80%",

        end: "top 30%",

        scrub: 1

    }

});



/* ==========================================
   PROJECT REVEALS
========================================== */

document
    .querySelectorAll(".project-card")
    .forEach(card => {


        const visual = card.querySelector(".project-visual");

        const projectTitle = card.querySelector(".project-visual h3");

        const bigNumber = card.querySelector(".project-big-number");


        gsap.from(visual, {

            clipPath: "inset(100% 0 0 0)",

            scrollTrigger: {

                trigger: card,

                start: "top 85%",

                end: "top 20%",

                scrub: 1

            }

        });


        gsap.from(projectTitle, {

            y: 150,

            opacity: 0,

            scrollTrigger: {

                trigger: card,

                start: "top 70%",

                end: "top 25%",

                scrub: 1

            }

        });


        gsap.to(bigNumber, {

            yPercent: -20,

            scrollTrigger: {

                trigger: card,

                start: "top bottom",

                end: "bottom top",

                scrub: 1

            }

        });


        gsap.from(card.querySelector(".project-info"), {

            y: 80,

            opacity: 0,

            scrollTrigger: {

                trigger: card,

                start: "top 45%",

                end: "top 15%",

                scrub: 1

            }

        });

    });



/* ==========================================
   BIG TEXT TRANSITION
========================================== */

document
    .querySelectorAll(".big-text span")
    .forEach((line, index) => {


        gsap.from(line, {

            xPercent: index % 2 === 0 ? -100 : 100,

            scrollTrigger: {

                trigger: ".big-text-section",

                start: "top 80%",

                end: "center center",

                scrub: 1

            }

        });

    });



/* ==========================================
   EXPERIENCE
========================================== */

gsap.from(".experience-header h2", {

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

gsap.from(".education-header h2", {

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
    .forEach(item => {


        gsap.from(item, {

            x: -100,

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

    y: 150,

    opacity: 0,

    scrollTrigger: {

        trigger: ".contact",

        start: "top 65%",

        end: "top 25%",

        scrub: 1

    }

});



/* ==========================================
   REFRESH SCROLLTRIGGER
========================================== */

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});