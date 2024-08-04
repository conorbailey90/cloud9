const lenis = new Lenis();
gsap.registerPlugin(ScrollTrigger)

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

// Sync Lenis scroll events with ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// gsap.fromTo('.welcome__image', {x: -100 + 'px', opacity: 0},{
//   scrollTrigger: {
//     trigger: '.welcome__image',
//     start: `top bottom`,
//     end: `bottom top`,
//     scrub: true,
//     // toggleActions: 'restart none none restart',
//     invalidateOnRefresh: true,
//     markers: true

//   },
//   x: 0 + 'px',
//   opacity: 1,
//   duration: 1
// })

let divs = [...document.querySelectorAll('div')].filter(div => !div.classList.contains('hero__overlay'));



divs.forEach((p, index) => {
  gsap.fromTo(p, 
    { opacity: 0 }, // Start position
    { 
      opacity: 1, // End position
      ease: 'none',
      scrollTrigger: {
        trigger: p,
        start: 'top bottom', // When the top of the image hits the bottom of the viewport
        end: 'bottom top', // When the bottom of the image hits the top of the viewport
    
        // markers: true
      }
    }
  );
});