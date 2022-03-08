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
