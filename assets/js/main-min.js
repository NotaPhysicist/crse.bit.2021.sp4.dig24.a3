/**
 * Slider Image Gallery
 * ---------------------
 * Instantiate and configure the tiny slider library. 
 * Slider is set without controls to provide a cointuous slideshow 
 */

function initSlider() {
   
   const slider = tns({
      container: '.js-slider',
      mode: 'carousel',
      items: 2,
      startIndex: 3,
      slideby: 'page',
      autoplay: true,
      // autoplayHoverPause: true,
      autoplayTimeout: 3550,
      speed: 3500,
      autoWidth: true, 
      center: true,
      touch: true,
      // mouseDrag: true,
      controls: false,
      nav: false,
      loop: true,
      autoplayButton: false
   });

}


/**
 * Text Marquees 
 * --------------
 * Set up the supermarquee instance. 
 * All the marquees get created here at once and set to default values. 
 * Then they are individually configured to their custom settings as needed. 
 */

function initMarquee() {

   const marqueeElement = document.querySelectorAll('.js-smq');
   const marqueeObject = []; 
   
   for (let i = 0; i < marqueeElement.length; i++) {
      marqueeObject[i] = new SuperMarquee(marqueeElement[i], {
         'content': 'you don\'t know what happiness is',
         'speed': 'superslow',
         'pauseonhover': 'true',
         'easing': 'true',
         'spacer': '&nbsp • &nbsp'
      }); 
   }
   
   // marquee [0] 'happiness' 
   marqueeObject[0].setScrollContent('happiness');
   
   // marquee [1] 'the state of being happy' 
   marqueeObject[1].setScrollContent('the state of being happy');
   marqueeObject[1].setScrollSpeed('slow');
   
   // marquee [2] 'feeling or showing pleasure or contentment
   marqueeObject[2].setScrollContent('feeling or showing pleasure or contentmment');
   
   marqueeObject[3].setScrollContent('an emotional state or reaction');
   marqueeObject[4].setScrollContent('allowing, or causing to be visible');

}

/**
 * Header Animations
 * -----------------
 * Move the header elements out of the way when the user scrolls down.
 * Set the progross bar to display progress as the user scrolls. 
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

   /* move the logo and top link out of why for scrolling 
    */ 
   ScrollTrigger.create( {
      start: 150,
      end: 'bottom bottom-=20',
      toggleClass: {
         targets: 'body', 
         className: 'has-scrolled'
      }
   });
}

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

// @codekit-prepend './components/slider.js'
// @codekit-prepend './components/marquee.js'
// @codekit-prepend './components/header.js'
// @codekit-prepend './components/splash.js'

function init() {

   initHeader();
   initSlider();
   initMarquee();
   initSplashTilt();

}

window.addEventListener('load', function() {
   init();
})
