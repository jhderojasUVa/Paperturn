// Slideshow on pure JS

// Initial configuration (slide to begin and timming)
var slideIndex = 0;
var timming = 2000;

// Run the slideshow letting react to create the structure
setTimeout(function(){
  showSlide();
}, 5);

function showSlide() {

  // Finding the slides
  var slides = document.getElementsByClassName('myslide');

  // Clearing all the elements
  for (var i = 0; i < document.getElementsByClassName('myslide').length; i++) {
    document.getElementsByClassName('myslide')[i].style.display = 'none';
  }

  // Taking the three next slides
  for (var i = 0; i < 3; i++) {
    // but no more than the elements!
    if ((slideIndex+i) >= document.getElementsByClassName('myslide').length) {
      slideIndex = -i;
    }
    // Showing the element!
    document.getElementsByClassName('myslide')[slideIndex+i].style.display = 'inline-block';
  }
  slideIndex = slideIndex+3;
  // Next!
  setTimeout(showSlide, timming);
}
