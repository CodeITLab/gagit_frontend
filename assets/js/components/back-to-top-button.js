
let mybutton = document.getElementById("back-to-top-button");
let btn = document.getElementById("back-to-top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

btn.onclick = function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}