const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
   lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

//GSAP Timeline
var tl = gsap.timeline();

// hero load animations.
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

// Section2 scroll text appearing.
gsap.from("#section2 h1", {
   opacity: 0,
   x: "-10%",
   duration: 0.5,
   scrollTrigger: {
      trigger: "#section2 h1",
      start: "top 85%",
   },
});

// Section3 scroll text appearing.
gsap.from(".section3_title", {
   opacity: 0,
   x: "-20%",
   duration: 0.5,
   scrollTrigger: {
      trigger: ".section3_title h1",
      start: "top 80%",
   },
});

// Section4 scroll text appearing.
gsap.from(".section4_title", {
   opacity: 0,
   x: "-20%",
   duration: 0.5,
   scrollTrigger: {
      trigger: ".section4_title h1",
      start: "top 80%",
   },
});

// Section3 scroll boxes animation
gsap.to(".sample_boxes_shutter1", {
   y: "-100%",
   duration: 0.5,
   scrollTrigger: {
      trigger: ".sample_boxes_shutter1",
      start: "top 85%",
   },
});
gsap.to(".sample_boxes_shutter2", {
   y: "-100%",
   duration: 0.5,
   scrollTrigger: {
      trigger: ".sample_boxes_shutter2",
      start: "top 85%",
   },
});
gsap.to(".sample_boxes_shutter3", {
   y: "-100%",
   duration: 0.5,
   scrollTrigger: {
      trigger: ".sample_boxes_shutter3",
      start: "top 85%",
   },
});
gsap.to(".sample_boxes_shutter4", {
   y: "-100%",
   duration: 0.5,
   scrollTrigger: {
      trigger: ".sample_boxes_shutter4",
      start: "top 85%",
   },
});

// Section4 scroll boxes animation
gsap.to(".sample_boxes_shutter5", {
   y: "-100%",
   duration: 0.5,
   scrollTrigger: {
      trigger: ".sample_boxes_shutter5",
      start: "top 85%",
   },
});
gsap.to(".sample_boxes_shutter6", {
   y: "-100%",
   duration: 0.5,
   scrollTrigger: {
      trigger: ".sample_boxes_shutter6",
      start: "top 85%",
   },
});
gsap.to(".sample_boxes_shutter7", {
   y: "-100%",
   duration: 0.5,
   scrollTrigger: {
      trigger: ".sample_boxes_shutter7",
      start: "top 85%",
   },
});
gsap.to(".sample_boxes_shutter8", {
   y: "-100%",
   duration: 0.5,
   scrollTrigger: {
      trigger: ".sample_boxes_shutter8",
      start: "top 85%",
   },
});
