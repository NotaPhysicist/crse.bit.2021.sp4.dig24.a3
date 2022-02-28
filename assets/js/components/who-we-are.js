/**
 * Who We Are Section
 * -------------------
 * 
 */

function initWhoWeAre() {

   let timeline = gsap.timeline({
      scrollTrigger: {
         trigger: '.who-we-are',
         start: 'top center',
         end: 'bottom bottom-=20',
         id: 'who-we-are'
      }
   });

   timeline
      // drop in the headings from above
      .from('.who-we-are .text__heading', {
         duration: 1.8,
         yPercent: -75,
         autoAlpha: 0,
         ease: 'power1.out',
         stagger: 0.3
      }, '+=25%')
      .from('.who-we-are .text__p', {
         duration: 1.6,
         xPercent: 75,
         autoAlpha: 0,
         ease: 'power2.out',
         stagger: 0.3
      }, 0)
      .from('.who-we-are .text-wrapper', {
         duration: 5,
         autoAlpha: 0,
         ease: 'power1.out'
      }, 0);
      
}


