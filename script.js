var color1 = document.querySelector(".one");
var color2 = document.querySelector(".two");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");

function backgroundStyle(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", backgroundStyle);

color2.addEventListener("input", backgroundStyle);

