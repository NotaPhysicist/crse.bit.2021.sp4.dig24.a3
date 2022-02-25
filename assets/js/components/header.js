/**
 * Header Animation
 * -----------------
 * Move the header elements out of the way when the user scrolls down.
 */

gsap.registerPlugin(ScrollTrigger);

function initHeader() {

   /* attach the scroll bar to scrolltrigger plugin to display 
    * scroll progress on progress bar
    */ 
   gsap.to('sl-progress-bar', {
      value: 100, 
      ease: 'none',
      scrollTrigger: { 
         scrub: 0.3
      }
   });

   /* move the logo and top link out of why for scrolling */ 
   ScrollTrigger.create( {
      start: 150,
      end: 'bottom bottom-=20',
      toggleClass: {
         targets: 'body', 
         className: 'has-scrolled'
      },
      markers: true
   });

}