/**
 * ---------------------
 * Body Text Animations
 * ---------------------
 *  
 */

function animateBodyText(section) {

      // animate in the main text for this page
   let timeline = gsap.timeline({
      scrollTrigger: {
         trigger: section,
         start: 'top center',
         end: 'bottom bottom-=20',
         id: section,
         
         markers: false
      }
   });

   timeline
      // drop in the headings from above
      .from(`${section} .text__heading`, {
         duration: 1.8,
         yPercent: -75,
         autoAlpha: 0,
         ease: 'power1.out',
         stagger: 0.3
      }, '+=25%')
      // slide in the text from the side
      .from(`${section} .text__p`, {
         duration: 1.6,
         xPercent: 75,
         autoAlpha: 0,
         ease: 'power2.out',
         stagger: 0.3
      }, 0)
      // fade in the background
      .from(`${section} .text-wrapper`, {
         duration: 5,
         autoAlpha: 0,
         ease: 'power1.out'
      }, 0);

}