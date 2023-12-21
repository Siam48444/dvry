const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
   lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// hero load animations.
var tl = gsap.timeline();

tl.from(".load_appear_texts", {
   y: "100%",
   duration: 0.7,
   stagger: 0.3,
});
tl.to(".hero_image_containers_shutters", {
   y: "-100%",
   duration: 0.7,
});
tl.from("nav, .hero_bottom", {
   scale: 0.95,
   opacity: 0,
   duration: 0.7,
});
