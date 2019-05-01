var slides = 1;
showDivs(slides);

function plusDivs(arrow) {
    showDivs(slides += arrow);
}

function showDivs(arrow) {
    var i;
    var images = document.getElementsByClassName("heading-slide");
    if (arrow > images.length) {slides = 1}
    if (arrow < 1) {slides = images.length};
    for ( i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[slides - 1].style.display = "block";
    
}

// modal

function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

