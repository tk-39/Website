//Code for slideshow in index.html, changes image every 6* seconds

//I used this code from W3Schools but I have changed it so instead of it changing every 3 seconds it now changes every 6 so it is at a much slower pace
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 6000);
}





