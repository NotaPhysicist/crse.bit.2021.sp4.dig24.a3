/**
 * --------------
 * Text Marquees 
 * --------------
 * 
 */


/**
 * Constructor function. 
 * Create a SuperMarquee with a set of default values  
 */
function createMarquee(element, content) {
   
   // default html for the spacer
   const spacerHTMLposition = `position: relative`;
   const spacerHTMLtranslate = `transform: translateY(0.075em)`;
   const spacerHTMLcolor = `color: var(--color-accent)`;
   const spacerHTML = `&nbsp<span style="${spacerHTMLcolor};${spacerHTMLposition};${spacerHTMLtranslate};">•<span>&nbsp`;
   
   return new SuperMarquee(element, {
      'content': content,
      'speed': 'slow', 
      'pauseonhover': '1',
      'easing': '1',
      'spacer': spacerHTML   
   });

}

/**
 * A set of functions to set a CSS value to a SuperMarquee
 */
function setMarqueeFontFamily(element, fontFamily) {
   element.style.fontFamily = fontFamily;
}

function setMarqueeLineHeight(element, lineHeight) {
   element.style.lineHeight = lineHeight;
}

function setMarqueeFontSize(element, fontSize) {
   element.style.fontSize = fontSize;
}

function setMarqueeFontWeight(element, fontWeight) {
   element.style.fontWeight = fontWeight;
}

function setMarqueeColor(element, color) {
   element.style.color = color;
}

function setMarqueeLetterSpacing(element, letterspacing) {
   element.style.letterSpacing = letterspacing;
}

function setMarqueeToSticky(element, offset) {
   element.style.position = 'sticky';
   element.style.top = offset;
}

/**
 * Set the SuperMarquee to a set of default CSS values
 */
function setMarqueeDefaults(element) {

   setMarqueeFontFamily(element, 'Poppins');
   setMarqueeLineHeight(element, 2.6);
   setMarqueeFontSize(element, 'var(--text-lg)');
   setMarqueeFontWeight(element, 100);
   setMarqueeColor(element, 'var(--color-main');
   setMarqueeLetterSpacing(element, '0.092rem');

}

/**
 * Set to speed1, wait for a period, time, then set to speed2.
 * Speed settings: 
 *    "superslow"
 *    "slow"
 *    "medium"
 *    "fast"
 *    "superfast"
 * Or number ~ 0.0125 - 0.2
 */

function marqueeChangeSpeed(marqueeObj, speed1, time, speed2) {

   // set first speed
   marqueeObj.setScrollSpeed(speed1);

   // wait, then set second speed
   setTimeout(() => {
      marqueeObj.setScrollSpeed(speed2);
   }, time);

}

function marqueeSpeedAnimation1(marqueeObj, speed1, pause1, speed2, pause2, speed3) {

   // from speed1, pause, to speed2
   marqueeChangeSpeed(marqueeObj, speed1, pause1, speed2);

   // pause, then from speed2, pause, to speed 3
   setTimeout(() => {
      marqueeChangeSpeed(marqueeObj, speed2, pause2, speed3);
   }, pause1);
   
}
