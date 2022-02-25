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
