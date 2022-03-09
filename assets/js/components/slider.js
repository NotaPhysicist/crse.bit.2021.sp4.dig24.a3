/**
 * ---------------------
 * Slider Image Gallery
 * ---------------------
 * Instantiate and configure the tiny slider library. 
 * Slider is set without controls to provide a cointuous slideshow 
 */

function initSlider() {

   // instantiate "happiness" marquee to sit above the image slider
   const smqHappinessEl = document.querySelector('.smq--happiness > .smq');
   const smqHappinessOb = createMarquee(smqHappinessEl, 'happiness');
   setMarqueeDefaults(smqHappinessEl);

   setMarqueeFontSize(smqHappinessEl, 'var(--text-xl');
   // setMarqueeFontWeight(smqHappinessEl, '200');
   setMarqueeLineHeight(smqHappinessEl, '1');
   smqHappinessOb.setScrollSpeed('superslow');   

   // become sticky at the correct offset from the top
   // becoming sticky animation
   //   - marqueeSpeedAnimation1()
   //   - shrink down to a smaller size
   // become unsticky and rejoin the flow of the page
   //   - marqueeSpeedAnimation1()
   //   - shrink up to it's prior size

   // setMarqueeToSticky(smqHappinessOb, 0);
   
   
   // instantiate the image slider and set it in motion. 
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
      mouseDrag: false,
      controls: false,
      nav: false,
      loop: true,
      autoplayButton: false
   });

   
   //instantiate "what say you" marquee to sit below the image slider
   const whatSayYou = 'What does it mean?';
   const smqWhatSayYouEl = document.querySelector('.smq--what-say-you > .smq');
   const smqWhatSayYouOb = createMarquee(smqWhatSayYouEl, whatSayYou);
   setMarqueeDefaults(smqWhatSayYouEl);

   setMarqueeLineHeight(smqWhatSayYouEl, '1.8');
   smqWhatSayYouOb.setScrollSpeed('slow');



}
