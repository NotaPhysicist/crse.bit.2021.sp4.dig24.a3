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
   
   const spacerHTMLposition = `position: relative`;
   const spacerHTMLtranslate = `transform: translateY(0.075em)`;
   const spacerHTMLcolor = `color: var(--color-accent)`;
   const spacerHTML = `&nbsp<span style="${spacerHTMLcolor};${spacerHTMLposition};${spacerHTMLtranslate};">•<span>&nbsp`;
   
   for (let i = 0; i < marqueeElement.length; i++) {
      marqueeObject[i] = new SuperMarquee(marqueeElement[i], {
         'content': 'you don\'t know what happiness is',
         'speed': 'superslow',
         'pauseonhover': 'true',
         'easing': 'true',
         'spacer': spacerHTML
      }); 
   }
   
   // marquee [0] 'happiness' 
   marqueeObject[0].setScrollContent('happiness');
   
   // marquee [1] 'the state of being happy' 
   marqueeObject[1].setScrollContent('the state of being happy');
   marqueeObject[1].setScrollSpeed('slow');
   
   // marquee [2] 'feeling or showing pleasure or contentment
   marqueeObject[2].setScrollContent('feeling or showing pleasure or contentmment');
   
   // marqueeObject[3].setScrollContent('an emotional state or reaction');
   // marqueeObject[4].setScrollContent('allowing, or causing to be visible');

}

/**
 * Header Animations
 * -----------------
 * Move the header elements out of the way when the user scrolls down.
 * Set the progross bar to display progress as the user scrolls. 
 */

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
   // markers: true
})

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
      id: 'header',
      toggleClass: {
         targets: 'body', 
         className: 'has-scrolled'
      }
   });
}

/**
 * Splash Tilt Animation
 * ----------------------
 * Animate splash screen. 
 * Text fades in on page load. 
 * Apply a text tilt animation the title text that repsonds 
 * to mouse movement. 
 */

/* animate the viusal elements into view 
 */ 
function initSplashTilt() {
   
   // first, animate in the text elements
   gsap.defaults({
      ease: 'power4.out'
   });

   gsap.timeline()
      .from('.subtitle', {
         delay: 1,
         yPercent: 500,
         duration: 3
      })
      .from('.scroll-indicator', {
         yPercent: 500,
         duration: 3
      }, '<25%')
      .from('.title__word', {
         scale: 15,
         yPercent: -2000,
         duration: 2,
         stagger: {
            each: 0.4,
            ease: 'power1.out'
         }
      }, 0)
      .to('.title__word', {
         duration: 0.3,
         opacity: 1
      }, 0)
      .to('.subtitle', {
         duration: 0.3,
         opacity: 1
      }, 0)
      .to('.scroll-indicator', {
         duration: 0.3,
         opacity: 1
      }, 0);
   
   // then, add an event listener to activate the moveText function
   document.querySelector('.splash').addEventListener('mousemove', moveText);

}

/* apply the text tilt effect 
 */ 
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
         x: xPosition * 50 * modifier(index),
         y: yPosition * 40 * modifier(index),
         z: xPosition * modifier(index),
         rotationX: xPosition * 40,
         rotationY: yPosition * 40,
         ease: 'power4.out'
      });
   });

   /*
   // move the subtitle
   gsap.to('.subtitle', {
      duration: 1.8, 
      x: xPosition * 120,
      y: yPosition * 180,
      ease: 'power4.out'
   });
   
   // move the chevron
   gsap.to('.scroll-indicator', {
      duration: 1.8, 
      x: xPosition * 100,
      y: yPosition * 120,
      ease: 'power4.out'
   });
   */

}

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




/**
 * How It Works Section
 * ---------------------
 * 
 */

function initHowItWorks() {

   let timeline = gsap.timeline({
      scrollTrigger: {
         trigger: '.how-it-works',
         start: 'top center',
         end: 'bottom bottom-=20',
         id: 'how-it-works'
      }
   });

   timeline
      // drop in the headings from above
      .from('.how-it-works .text__heading', {
         duration: 1.8,
         yPercent: -75,
         autoAlpha: 0,
         ease: 'power1.out',
         stagger: 0.3
      }, '+=25%')
      .from('.how-it-works .text__p', {
         duration: 1.6,
         xPercent: 75,
         autoAlpha: 0,
         ease: 'power2.out',
         stagger: 0.3
      }, 0)
      .from('.how-it-works .text-wrapper', {
         duration: 5,
         autoAlpha: 0,
         ease: 'power1.out'
      }, 0);
      
}


// @codekit-prepend './components/slider.js'
// @codekit-prepend './components/marquee.js'
// @codekit-prepend './components/header.js'
// @codekit-prepend './components/splash.js'
// @codekit-prepend './components/who-we-are.js'
// @codekit-prepend './components/how-it-works.js

function circle() {
   
}

function init() {

   initHeader();
   initSlider();
   initMarquee();
   initSplashTilt();
   initWhoWeAre();
   initHowItWorks();
   initCircle();

}

window.addEventListener('load', function() {
   init();
})
