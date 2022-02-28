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
