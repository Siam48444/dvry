const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
   lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// hero load animations.
var tl = gsap.timeline();

tl.to("#loader h3", {
   opacity: 0,
   duration: 0.4,
   delay: 0.3,
   ease: "power1.inOut",
});
tl.to("#loader", {
   y: "-100%",
   pointerEvents: "none",
   duration: 1.2,
   ease: "power1.inOut",
});
tl.from(".load_appear_texts", {
   y: "100%",
   duration: 0.5,
   stagger: 0.3,
   pointerEvents: "none",
   ease: "power1.inOut",
});
tl.to(".hero_image_containers_shutters", {
   y: "-100%",
   duration: 0.5,
   stagger: 0.1,
   ease: "power1.inOut",
});
tl.from("nav, .hero_bottom", {
   pointerEvents: "none",
   scale: 0.95,
   opacity: 0,
   duration: 0.5,
   stagger: 0.1,
   ease: "power1.inOut",
});
