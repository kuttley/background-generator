var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setGradient);

// on load so it sets up the page
setGradient();


function randomize() {
    color1.value = randomColor();
    color2.value = randomColor();

    c1.innerHTML = color1.value;
    c1.style.backgroundColor = color1.value;
    c2.innerHTML = color2.value;
    c2.style.backgroundColor = color2.value;
}

function setGradient(){
    randomize();
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}
