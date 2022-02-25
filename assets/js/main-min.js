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
 * Set up the supermarquee instance. All the marquees get created 
 * here at once and set to default values. Then they are 
 * individually configured to their custom settins as needed. 
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

// @codekit-prepend './components/slider.js'
// @codekit-prepend './components/marquee.js'
// @codekit-prepend './components/header.js'

function init() {

   initHeader();
   initSlider();
   initMarquee();

}

window.addEventListener('load', function() {
   init();
})
