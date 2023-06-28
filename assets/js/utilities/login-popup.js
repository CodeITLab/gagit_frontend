
let modal = document.getElementById("login-popup-wrapper");
let btn = document.getElementById("login-button");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
