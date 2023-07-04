
let div = document.getElementById("comment-posting-display");
let btn = document.getElementById("post-a-comment-button");

btn.onclick = function() {
  div.style.display =  "block";  
}

window.onclick = function(event){
    if (event.target == div){
        div.style.display = "none";
    }
}

