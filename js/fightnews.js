const slide = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("demo");
const captionText = document.getElementById("caption");
let slides = 1;

// modal

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
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

    if (n > slide.length) {
      slideIndex = 1;
    }
    
    if (n < 1) {
      slideIndex = slide.length;
    }
    for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slide[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
