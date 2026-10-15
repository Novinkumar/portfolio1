gsap.registerPlugin(ScrollTrigger);

const loaderNumber = document.querySelector(".loader-number");
const loaderProgress = document.querySelector(".loader-progress");
let progress = 0;

const loadingInterval = setInterval(() => {
  progress += Math.floor(Math.random() * 9) + 2;
  if (progress >= 100) {
    progress = 100;
    clearInterval(loadingInterval);
    setTimeout(closeLoader, 250);
  }
  loaderNumber.textContent = `${progress}%`;
  loaderProgress.style.width = `${progress}%`;
}, 65);

function closeLoader() {
  const timeline = gsap.timeline();
  timeline.to(".loader-name, .jolly-flag", { y: -35, opacity: 0, duration: .4 });
  timeline.to(".loader", { yPercent: -100, duration: .9, ease: "power4.inOut" });
  timeline.from(".eyebrow", { y: 25, opacity: 0, duration: .6 });
  timeline.from(".title-line", { y: 140, opacity: 0, stagger: .13, duration: .9, ease: "power4.out" }, "-=.3");
  timeline.from(".hero-bottom", { y: 25, opacity: 0, duration: .6 }, "-=.35");
}

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");
if (window.matchMedia("(pointer:fine)").matches && cursor && follower) {
  window.addEventListener("mousemove", event => {
    gsap.to(cursor, { x: event.clientX - 3, y: event.clientY - 3, duration: .05, overwrite: true });
    gsap.to(follower, { x: event.clientX - 17, y: event.clientY - 17, duration: .3, ease: "power2.out", overwrite: true });
  });
}

gsap.to(".hero-title", {
  scale: 1.13, yPercent: 12, opacity: .15,
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
});
gsap.to(".hero-bg-text", {
  xPercent: -15,
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
});

document.querySelectorAll(".transition-text span").forEach((line, index) => {
  gsap.fromTo(line,
    { xPercent: index % 2 === 0 ? -45 : 45, opacity: 0 },
    { xPercent: 0, opacity: 1, scrollTrigger: { trigger: ".transition-section", start: "top 80%", end: "center center", scrub: 1 } }
  );
});

gsap.from(".about-content h2", {
  y: 100, opacity: 0,
  scrollTrigger: { trigger: ".about", start: "top 65%", end: "top 25%", scrub: 1 }
});
gsap.from(".about-description p", {
  y: 50, opacity: 0, stagger: .12,
  scrollTrigger: { trigger: ".about-description", start: "top 85%", end: "top 50%", scrub: 1 }
});
gsap.from(".section-heading h2, .experience-header h2, .education-header h2, .projects-header h2", {
  xPercent: -15, opacity: 0, stagger: .1,
  scrollTrigger: { trigger: ".skills", start: "top 80%", end: "top 30%", scrub: 1 }
});

document.querySelectorAll(".skill-card").forEach(card => {
  gsap.from(card, { y: 70, opacity: 0, scrollTrigger: { trigger: card, start: "top 90%", end: "top 60%", scrub: 1 } });
});

document.querySelectorAll(".project-card").forEach(card => {
  const visual = card.querySelector(".project-visual");
  const title = card.querySelector(".project-visual h3");
  const number = card.querySelector(".project-big-number");
  gsap.from(visual, { clipPath: "inset(100% 0 0 0)", scrollTrigger: { trigger: card, start: "top 85%", end: "top 20%", scrub: 1 } });
  gsap.from(title, { y: 90, opacity: 0, scrollTrigger: { trigger: card, start: "top 70%", end: "top 25%", scrub: 1 } });
  gsap.to(number, { yPercent: -18, scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 } });
  gsap.from(card.querySelector(".project-info"), { y: 45, opacity: 0, scrollTrigger: { trigger: card, start: "top 45%", end: "top 15%", scrub: 1 } });
});

document.querySelectorAll(".big-text span").forEach((line, index) => {
  gsap.from(line, { xPercent: index % 2 ? 30 : -30, opacity: 0, scrollTrigger: { trigger: ".big-text-section", start: "top 80%", end: "center center", scrub: 1 } });
});

gsap.from(".experience-card > h3", { y: 90, opacity: 0, scrollTrigger: { trigger: ".experience-card", start: "top 75%", end: "top 30%", scrub: 1 } });
gsap.from(".experience-details p", { y: 45, opacity: 0, stagger: .12, scrollTrigger: { trigger: ".experience-details", start: "top 90%", end: "top 60%", scrub: 1 } });
document.querySelectorAll(".education-item").forEach(item => {
  gsap.from(item, { x: -55, opacity: 0, scrollTrigger: { trigger: item, start: "top 90%", end: "top 65%", scrub: 1 } });
});
gsap.from(".contact h2", { y: 90, opacity: 0, scrollTrigger: { trigger: ".contact", start: "top 65%", end: "top 25%", scrub: 1 } });

window.addEventListener("load", () => ScrollTrigger.refresh());
