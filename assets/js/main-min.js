console.log("js working");const slider=tns({container:".js-slider",mode:"carousel",items:2,startIndex:3,slideby:"page",autoplay:!0,autoplayTimeout:3550,speed:3500,autoWidth:!0,center:!0,touch:!0,controls:!1,nav:!1,loop:!0,autoplayButton:!1}),marqueeElement=document.querySelectorAll(".js-smq"),marqueeObject=[];for(let e=0;e<marqueeElement.length;e++)marqueeObject[e]=new SuperMarquee(marqueeElement[e],{content:"you don't know what happiness is",speed:"superslow",pauseonhover:"true",easing:"true",spacer:"&nbsp • &nbsp"});marqueeObject[0].setScrollContent("happiness"),marqueeObject[1].setScrollContent("the state of being happy"),marqueeObject[1].setScrollSpeed("slow"),marqueeObject[2].setScrollContent("feeling or showing pleasure or contentmment"),marqueeObject[3].setScrollContent("an emotional state or reaction"),marqueeObject[4].setScrollContent("allowing, or causing to be visible"),window.addEventListener("load",(function(){init()}));