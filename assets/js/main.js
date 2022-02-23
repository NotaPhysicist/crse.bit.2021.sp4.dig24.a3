console.log('js working');

/* instantiate tiny slider */
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
   // mouseDrag: true,
   controls: false,
   nav: false,
   loop: true,
   autoplayButton: false
});

/* instantiate all the supermarquee's on the page to default values 
const smq = document.querySelectorAll('.js-smq');
smq.forEach( (scrollContainer) => {
   new SuperMarquee(scrollContainer, {
      'content': 'happiness',
      'speed': 'superslow',
      'pauseonhover': 'true',
      'easing': 'true',
      'spacer': '&nbsp • &nbsp'
   });
});
*/ 


const marqueeElement = document.querySelectorAll('.js-smq');
const marqueeObject = []; 

for (let i = 0; i < marqueeElement.length; i++) {
   marqueeObject[i] = new SuperMarquee(marqueeElement[i], {
      'content': 'you don\'t know what happiness is',
      'speed': 'superslow',
      'pauseonhover': 'true',
      'easing': 'true',
      'spacer': '&nbsp • &nbsp'
   }); 
}

marqueeObject[0].setScrollContent('happiness');
marqueeObject[1].setScrollContent('the state of being happy');
marqueeObject[1].setScrollSpeed('slow');

marqueeObject[2].setScrollContent('feeling or showing pleasure or contentmment');
marqueeObject[3].setScrollContent('an emotional state or reaction');
marqueeObject[4].setScrollContent('allowing, or causing to be visible');

/* grab each of the individuaal marquees 
marquee.setScrollContent('test');
const smqHappiness1 = document.querySelector('.js-smq--happiness-1');
smqHappiness1.setScrollContent('the state of being happy');
const smqHappiness2 = document.querySelector('.js-smq-happiness-2');
const smqHappy = document.querySelector('.js-smq-happy');
const smqFeeling = document.querySelector('.js-smq-feeling');
const smqShowing = document.querySelector('.js-smq-showing');

smqHappiness1.setScrollContent('happiness');
mySuperMarquee[1].setScrollContent('the state of being happy');
smqHappy.setScrollContent('feeling or showing pleasure or contentment');
smqFeeling.setScrollContent('an emotional state or reaction');
smqShowing.setScrollContent('allowing, or causing to be visible');
*/ 