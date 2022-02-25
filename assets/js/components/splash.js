/**
 * Splash Tilt Animation
 * ----------------------
 * 
 */

function initSplashTilt() {
   
   // first, animate in the text elements
   gsap.defaults({
      ease: 'power4.out'
   });

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
         duration: 2,
         stagger: {
            each: 0.4,
            ease: 'power1.out'
         }
      }, 0);


   // then, add an event listener to activate the moveText function
   document.querySelector('.splash').addEventListener('mousemove', moveText);

}

function moveText(event) {

   // deconstruct the values we need from the event object
   const { offsetX, offsetY, target } = event;
   const { clientWidth, clientHeight } = target;

   // track the position of the mouse on the page
   // gives us (0, 0) in the centre of the screen, and
   // -0.5 to +0.5 on each of the edges of the coordinate plane
   const xPosition = (offsetX / clientWidth) - 0.5;  
   const yPosition = (offsetY / clientHeight) - 0.5; 

   // grab the word objects we intend to animate
   const words = gsap.utils.toArray('.title__word');

   // differntial movement for each layer of text
   const modifier = (index) => index * 1.2 + 0.5;

   // move the words 
   words.forEach((word, index) => {
      gsap.to(word, {
         duration: 1.2,
         x: xPosition * 35 * modifier(index),
         y: yPosition * 35 * modifier(index),
         z: xPosition * modifier(index),
         rotationX: xPosition * 40,
         rotationY: yPosition * 40,
         ease: 'power4.out'
      });
   });

   // move the subtitle
   gsap.to('.subtitle', {
      duration: 1.8, 
      x: xPosition * 120,
      y: yPosition * 140,
      ease: 'power4.out'
   });
   
   // move the chevron
   gsap.to('.scroll-indicator', {
      duration: 1.8, 
      x: xPosition * 80,
      y: yPosition * 50,
      ease: 'power4.out'
   });



}