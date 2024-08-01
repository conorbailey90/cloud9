const menuOpen = document.querySelector('.mobile__nav__toggle');
const menuClose = document.querySelector('.mobile__nav__close__toggle');
const mobileNavigation = document.querySelector('.mobile__nav');
const mobileLinks = [...document.querySelectorAll('.mobile__link')];


const lenis = new Lenis();

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

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
      const accordionContent = header.nextElementSibling;
      const accordionItem = header.parentElement;

      // Close any open accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
          if (item !== accordionItem) {
              item.querySelector('.accordion-content').style.maxHeight = null;
              item.querySelector('.accordion-content').style.padding = '0';
              item.querySelector('.accordion-content').style.margin = '0';
              
          }
      });

      // Toggle the current accordion item
      if (accordionContent.style.maxHeight) {
          accordionContent.style.maxHeight = null;
          accordionContent.style.padding = '0 0';
          accordionContent.style.margin = '0';
      } else {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
          accordionContent.style.padding = '1rem 0';
          accordionContent.style.margin = '0 0 1rem 0';
      }
  });
});

menuOpen.addEventListener('click', () => {
  mobileNavigation.classList.add('active');

  mobileLinks.forEach((link, idx) => {
    setTimeout(() => {
      link.parentElement.classList.add('active');
    }, (idx + 1) * 100);
  })
})

let idx = 0;

function closeMenu(){
  idx = 0;
  for(let i = mobileLinks.length - 1; i >= 0; i--){
    idx++
    setTimeout(() => {
      mobileLinks[i].parentElement.classList.remove('active');
      if(i === 0){
        setTimeout(() => {
          mobileNavigation.classList.remove('active');
        }, 200)
      }
    }, (idx) * 100);
  }
}
menuClose.addEventListener('click', () => {
  closeMenu()
  
})

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu()
  })
})

