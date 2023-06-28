
let backToTopBTN = document.getElementById("back-to-top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBTN.style.display = "block";
  } else {
    backToTopBTN.style.display = "none";
  }
}

backToTopBTN.onclick = function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}