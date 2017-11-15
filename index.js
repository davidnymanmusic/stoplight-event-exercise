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
  });
  slowButton.addEventListener("click", function(){
    slowLight.classList.toggle("slow");
  });
  goButton.addEventListener("click", function(){
    goLight.classList.toggle("go");
  });

})();
