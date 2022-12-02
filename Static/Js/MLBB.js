let MeliodasBan = 1;
sSlides(MeliodasBan);
/* Arrow function */
function nextSlides(x) {
  sSlides(MeliodasBan += x);
}
/* lazy js */
function currentSlide(x) {
  sSlides(MeliodasBan = x);
}
function sSlides(x) {
  let a;
  let musaka = document.getElementsByClassName("homeitems"); /* check! 30+ */
  let hover = document.getElementsByClassName("demo"); /* 70++ */
  let midbartext = document.getElementById("midbar"); /* 66 not 666! */
  /* reverse the first photo */
  if (x > musaka.length) { MeliodasBan = 1 }
  /* reverse the last photo */
  if (x < 1) { MeliodasBan = musaka.length }
  /* Show box */
  for (a = 0; a < musaka.length; a++) {
    musaka[a].style.display = "none";
  }
  /* Hover Opacity */
  for (a = 0; a < hover.length; a++) {
    hover[a].className = hover[a].className.replace(" active");
  }
  musaka[MeliodasBan - 1].style.display = "block";  /* Main Block at the moment*/
  hover[MeliodasBan - 1].className += " active";  /* Perma Opacity */
  midbartext.innerHTML = hover[MeliodasBan - 1].alt; /* Info text */
}