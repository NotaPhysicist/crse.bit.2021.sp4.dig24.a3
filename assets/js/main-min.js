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
 * --------------
 * Text Marquees 
 * --------------
 * 
 */


/**
 * Constructor function. 
 * Create a SuperMarquee with a set of default values  
 */
function createMarquee(element, content) {
   
   // default html for the spacer
   const spacerHTMLposition = `position: relative`;
   const spacerHTMLtranslate = `transform: translateY(0.075em)`;
   const spacerHTMLcolor = `color: var(--color-accent)`;
   const spacerHTML = `&nbsp<span style="${spacerHTMLcolor};${spacerHTMLposition};${spacerHTMLtranslate};">•<span>&nbsp`;
   
   return new SuperMarquee(element, {
      'content': content,
      'speed': 'slow', 
      'pauseonhover': '1',
      'easing': '1',
      'spacer': spacerHTML   
   });

}

/**
 * A set of functions to set a CSS value to a SuperMarquee
 */
function setMarqueeFontFamily(element, fontFamily) {
   element.style.fontFamily = fontFamily;
}

function setMarqueeLineHeight(element, lineHeight) {
   element.style.lineHeight = lineHeight;
}

function setMarqueeFontSize(element, fontSize) {
   element.style.fontSize = fontSize;
}

function setFontWeight(element, fontWeight) {
   element.style.fontWeight = fontWeight;
}

function setColor(element, color) {
   element.style.color = color;
}

function setLetterSpacing(element, letterspacing) {
   element.style.letterSpacing = letterspacing;
}

/**
 * Set the SuperMarquee to a set of default CSS values
 */
function setMarqueeDefaults(element) {
   setMarqueeFontFamily(element, 'Poppins');
   setMarqueeLineHeight(element, 2.6);
   setMarqueeFontSize(element, 'var(--text-lg)');
   setFontWeight(element, 100);
   setColor(element, 'var(--color-main');
   setLetterSpacing(element, '0.092rem');
}

/**
 * Set to speed1, wait for a period, time, then set to speed2.
 * Speed settings: 
 *    "superslow"
 *    "slow"
 *    "medium"
 *    "fast"
 *    "superfast"
 * Or number ~ 0.0125 - 0.2
 */

function marqueeChangeSpeed(marqueeObj, speed1, time, speed2) {

   // set first speed
   marqueeObj.setScrollSpeed(speed1);

   // wait, then set second speed
   setTimeout(() => {
      marqueeObj.setScrollSpeed(speed2);
   }, time);

}

function marqueeSpeedAnimation1(marqueeObj, speed1, time1, speed2, time2, speed3) {

   marqueeChangeSpeed(marqueeObj, speed1, time1, speed2);

   setTimeout(() => {
      marqueeChangeSpeed(marqueeObj, speed2, time2, speed3);
   }, time1);
   
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
 * -------------------
 * Who We Are Section
 * -------------------
 * 
 */


function initWhoWeAre() {
   
   //instantiate set up the marquee to its initial settings
   const boldOpen = `<span style="font-weight: 200;">`;
   const boldClose = `</span>`;
   const content = `This website is an investigation into a single word, ${boldOpen}happiness${boldClose}. We dig deep into the dictionary to discover what it might mean`;
   
   const smqWhoWeAreEl = document.querySelector('.smq--who-we-are');
   const smqWhoWeAreOb = createMarquee(smqWhoWeAreEl, content);
   setMarqueeDefaults(smqWhoWeAreEl);
   
   // animate the marquee on scroll
   ScrollTrigger.create({
      trigger: '.who-we-are',
      start: 'top center',
      end: 'bottom bottom-=20',
      id: 'marquee1',
      onEnter: () => marqueeSpeedAnimation1(smqWhoWeAreOb, 0.4, 5500, 'superslow', 3000, 'medium'),

      markers: true

   });

   

   
   
   
   // animate in the body text as we scroll into view
   animateBodyText('.who-we-are');
  
}




/**
 * ---------------------
 * How It Works Section
 * ---------------------
 * 
 */

function initHowItWorks() {

   /**
    * Circle animation   
    */ 
   function createCircleText(circle, ratio) {
   
      const text = document.querySelector(circle);
      
      /* rotate the text around the circle */ 
      text.innerHTML = text.innerText.split("").map(
         (char, i) => `<span style="transform: rotate(${i*ratio}deg)">${char}</span>`
      ).join("");   
   }
   
   animateBodyText('.how-it-works');   

      
   /* set the circle animation rotate angles */ 
   createCircleText('.outer .js-circle', 3.87);
   createCircleText('.inner .js-circle', 8.2);
   
      
}
  
      
      
   

// @codekit-prepend './components/slider.js'
// @codekit-prepend './components/marquee.js'
// @codekit-prepend './components/header.js'
// @codekit-prepend './components/body-text.js'

// @codekit-prepend './sections/splash.js'
// @codekit-prepend './sections/who-we-are.js'
// @codekit-prepend './sections/how-it-works.js

function circle() {
   
}

function init() {

   // components
   initHeader();
   initSlider();
   // initMarquee();
   
   // page sections 
   initSplashTilt();
   initWhoWeAre();
   initHowItWorks();

}

window.addEventListener('load', function() {
   init();
})
