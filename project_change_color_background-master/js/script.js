//Choose a random color



 let button = document.querySelector("button");
button.addEventListener("click", function(){
let randomColor = Math.floor(Math.random()*16777215).toString(16);

 document.querySelector("body").style.backgroundColor = "#" + randomColor;
body.style.backgroundColor = randomColor;
});
