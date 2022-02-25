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
