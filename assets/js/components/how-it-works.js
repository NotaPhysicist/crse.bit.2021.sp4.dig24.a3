/**
 * How It Works Section
 * ---------------------
 * 
 */

function initHowItWorks() {

   /**
    * Inital text presention
    */
   
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

      
      /* set the circle animation */ 
      createCircleText('.outer .js-circle', 3.87);
      createCircleText('.inner .js-circle', 8.2);
      
}
  
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
      
      
   