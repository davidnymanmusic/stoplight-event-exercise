(function() {
  'use strict';

  // YOUR CODE HERE
  var stopButton = document.getElementById('stopButton');
  var slowButton = document.getElementById('slowButton');
  var goButton = document.getElementById('goButton');

  var stopLight = document.getElementById("stopLight")
  var slowLight = document.getElementById("slowLight")
  var goLight = document.getElementById("goLight")

stopLight.classList.add("stop");
slowLight.classList.add("slow");
goLight.classList.add("go");


  stopButton.addEventListener("click", function(){
    stopLight.classList.toggle("stop");
    // console.log("Entered " + stopButton.innerText + " button");
  });
  slowButton.addEventListener("click", function(){
    slowLight.classList.toggle("slow");
    // console.log("Entered " + slowButton.innerText + " button");
  });
  goButton.addEventListener("click", function(){
    goLight.classList.toggle("go");
    // console.log("Entered " + goButton.innerText + " button");
  });

  stopButton.addEventListener("mouseenter", function(){
    console.log("Entered " + stopButton.innerText + " button");
  });
  slowButton.addEventListener("mouseenter", function(){
    console.log("Entered " + slowButton.innerText + " button");
  });
  goButton.addEventListener("mouseenter", function(){
    console.log("Entered " + goButton.innerText + " button");
  });

  stopButton.addEventListener("mouseleave", function(){
    console.log("Left " + stopButton.innerText + " button");
  });
  slowButton.addEventListener("mouseleave", function(){
    console.log("Left " + slowButton.innerText + " button");
  });
  goButton.addEventListener("mouseleave", function(){
    console.log("Left " + goButton.innerText + " button");
  });
})();
