
const images = document.getElementsByClassName("heading-slide");
let slides = 1;

showDivs(slides);
function plusDivs(arrow) {
    showDivs(slides += arrow);
}

function showDivs(arrow) {
    if (arrow > images.length) {
      slides = 1;
    }

    if (arrow < 1) {
      slides = images.length;
    }
    
    for ( i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[slides - 1].style.display = "block";
    
}




