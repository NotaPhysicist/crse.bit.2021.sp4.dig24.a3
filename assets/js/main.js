console.log('js working');

/**
 * Instatiate tiny slider 
 */
const slider = tns({
   container: '.slider',
   items: 2,
   startIndex: 3,
   slideby: 'page',
   autoplay: true,
   autoplayHoverPause: true,
   autoplayTimeout: 3550,
   speed: 3500,
   autoWidth: true, 
   center: true,
   touch: true,
   mouseDrag: true,
   controls: false,
   nav: false,
   loop: true,
   nav: false,
   autoplayButton: false
});




const mySuperMarquee = new SuperMarquee(
   document.getElementById('marquee-test'),
   {
      "content": "Hello world!!!"
   }
);
