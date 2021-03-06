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
   
   const smqWhoWeAreEl = document.querySelector('.smq--who-we-are > .smq');
   const smqWhoWeAreOb = createMarquee(smqWhoWeAreEl, content);
   setMarqueeDefaults(smqWhoWeAreEl);
   
   // animate the marquee on scroll
   ScrollTrigger.create({
      trigger: '.who-we-are',
      start: 'top center',
      end: 'bottom bottom-=20',
      id: 'marquee1',
      onEnter: () => marqueeSpeedAnimation1(smqWhoWeAreOb, 0.4, 3500, 'superslow', 3500, 'fast'),

      markers: false

   });

   
   // animate in the body text as we scroll into view
   animateBodyText('.who-we-are');
  
}


