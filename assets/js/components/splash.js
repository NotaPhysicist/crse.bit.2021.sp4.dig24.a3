/**
 * Splash Tilt Animation
 * ----------------------
 * 
 */

function initSplashTilt() {
   
   // animate in the text elements
   gsap.defaults({
      ease: 'power4.out'
   })

   gsap.timeline()
      .from('.subtitle', {
         delay: 1,
         autoAlpha: 0, 
         yPercent: 500,
         duration: 3
      })
      .from('.scroll-indicator', {
         autoAlpha: 0, 
         yPercent: 500,
         duration: 3
      }, '<25%')
      .from('.title__word', {
         autoAlpha: 0,
         scale: 15,
         yPercent: -2000,
         duration: 3.5,
         stagger: {
            each: 0.4,
            ease: 'power2.out'
         }
      }, 0);



   
   // add the event listener to activatet the moveText function
   document.querySelector('.splash').addEventListener('mousemove', moveText);

}

function moveText(event) {



}