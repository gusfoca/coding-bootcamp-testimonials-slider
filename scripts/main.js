"use strict";

let slide=0;
let arwp = document.getElementById("arrow-previous");
let arwn = document.getElementById("arrow-next");
arwp.addEventListener("click", function() {
  if(slide === 1) {
    slide = 0;
    let sl = document.getElementsByClassName("slides-container");
    sl[0].style.left = "0";
    arwp.className = "";
    arwn.className = "arwactive";
  }
});

arwn.addEventListener("click", function() {
  if(slide === 0) {
    slide = 1;
    let sl = document.getElementsByClassName("slides-container");
    sl[0].style.left = "-100vw";
    arwp.className = "arwactive";
    arwn.className = "";
  }
});
