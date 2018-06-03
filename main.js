document.addEventListener("DOMContentLoaded",getData);
setInterval(()=>{
    getData();
    document.querySelector("#list").innerHTML = "";
}, 10000);
async function getData() {  
const jsonData = await fetch("https://kea-alt-del.dk/kata-distortion/");
 myJson = await jsonData.json();
console.log(myJson);
showData(myJson);

 }
 
 function showData(data){
    let list = document.querySelector("#list");
    let template = document.querySelector("#template").content;
    
        let clone = template.cloneNode(true);
        let queue = clone.querySelector("#queue");
        queue.textContent = data.inQueue;
        queue.style.width = 4 * data.inQueue + "%";
   

        list.appendChild(clone);
}
cloneBubbles("bubble", "beer", 10, 100);
cloneBubbles("b-bubble", "b-clipped", 10, 85);
cloneBubbles("e1-bubble", "e1-clipped", 10, 85);
cloneBubbles("e2-bubble", "e2-clipped", 10, 85);
cloneBubbles("r-bubble", "r-clipped", 10, 85);

startBubbleTimeline("bubble", -220, 4);
startBubbleTimeline("b-bubble", -120, 3);
startBubbleTimeline("e1-bubble", -120, 3);
startBubbleTimeline("e2-bubble", -120, 3);
startBubbleTimeline("r-bubble", -120, 3);

function cloneBubbles(id, containerId, number, maxSpacing) {
  var beer = $("#" + containerId);
  var bubble = $("#" + id);
  var cx = parseInt(bubble.attr("cx"));
  bubble.addClass(id);
  bubble.removeAttr("id");
  for (var i = 0; i < number; i++) {
    var newBubble = bubble.clone();
    newBubble.attr("cx", (Math.random() * maxSpacing + cx));
    beer.append(newBubble);
  }
}

function startBubbleTimeline(className, y, duration) {
  TweenMax.staggerFromTo( $("." + className), duration, {
      opacity: 0,
      y: 0
    }, {
      opacity: 1,
      y: y,
      repeat: -1,
      repeatDelay: 0.73
    }, 1);
}