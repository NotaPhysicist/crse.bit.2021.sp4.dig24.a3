/**
 * Text Marquees 
 * --------------
 * Set up the supermarquee instance. 
 * All the marquees get created here at once and set to default values. 
 * Then they are individually configured to their custom settings as needed. 
 */

function initMarquee() {

   const marqueeElement = document.querySelectorAll('.js-smq');
   const marqueeObject = [];
   
   const spacerHTMLposition = `position: relative`;
   const spacerHTMLtranslate = `transform: translateY(0.075em)`;
   const spacerHTMLcolor = `color: var(--color-accent)`;
   const spacerHTML = `&nbsp<span style="${spacerHTMLcolor};${spacerHTMLposition};${spacerHTMLtranslate};">•<span>&nbsp`;
   
   for (let i = 0; i < marqueeElement.length; i++) {
      marqueeObject[i] = new SuperMarquee(marqueeElement[i], {
         'content': 'you don\'t know what happiness is',
         'speed': 'superslow',
         'pauseonhover': 'true',
         'easing': 'true',
         'spacer': spacerHTML
      }); 
   }
   
   // marquee [0] 'happiness' 
   marqueeObject[0].setScrollContent('happiness');
   
   // marquee [1] 'the state of being happy' 
   marqueeObject[1].setScrollContent('the state of being happy');
   marqueeObject[1].setScrollSpeed('slow');
   
   // marquee [2] 'feeling or showing pleasure or contentment
   marqueeObject[2].setScrollContent('feeling or showing pleasure or contentmment');
   
   // marqueeObject[3].setScrollContent('an emotional state or reaction');
   // marqueeObject[4].setScrollContent('allowing, or causing to be visible');

}