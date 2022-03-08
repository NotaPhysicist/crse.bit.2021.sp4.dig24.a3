/**
 * ---------------------
 * How It Works Section
 * ---------------------
 * 
 */

function initHowItWorks() {

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
   
   animateBodyText('.how-it-works');   

      
   /* set the circle animation rotate angles */ 
   createCircleText('.outer .js-circle', 3.87);
   createCircleText('.inner .js-circle', 8.2);
   
      
}
  
      
      
   