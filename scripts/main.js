let arw = document.getElementsByClassName("arwnext1");
arw[0].addEventListener("mousedown", function() {
  sl = document.getElementsByClassName("slides-container");
  sl[0].style.left = "-100vw";
});

arw = document.getElementsByClassName("arwprev2");
arw[0].addEventListener("mousedown", function() {
  sl = document.getElementsByClassName("slides-container");
  sl[0].style.left = "0";
});
