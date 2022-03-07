/**
 * -------------------
 * Who We Are Section
 * -------------------
 * 
 */

function initWhoWeAre() {

   //instantiate a marquee
   const content = 'This website is an investigation into a single word, <i>happiness</i>. We did deep into the dictionary to discover what it might mean';
   const smqWhoWeAreEl = document.querySelector('.smq--who-we-are');
   const smqWhoWeAreOb = createMarquee(smqWhoWeAreEl, content);
   setMarqueeDefaults(smqWhoWeAreEl);

   // animate in the main text for this page
   let timeline = gsap.timeline({
      scrollTrigger: {
         trigger: '.who-we-are',
         start: 'top center',
         end: 'bottom bottom-=20',
         id: 'who-we-are',
         onEnter: () => quickMarqueeSpeedup1(smqWhoWeAreOb),
         
         markers: false
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
      // slide in the text from the side
      .from('.who-we-are .text__p', {
         duration: 1.6,
         xPercent: 75,
         autoAlpha: 0,
         ease: 'power2.out',
         stagger: 0.3
      }, 0)
      // fade in the background
      .from('.who-we-are .text-wrapper', {
         duration: 5,
         autoAlpha: 0,
         ease: 'power1.out'
      }, 0);
      
}


