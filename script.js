
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('random');

function RGBToHex(r,g,b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " +
							color1.value + ", " +
							color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomArray() {
	var array = Array(3);

	for (var i = 0; i < array.length; i++) {
		array[i] = Math.floor(Math.random() * 256);
		// random number between 0 and 255
	}

	return array;
}

function randomGradient() {

	var color1Array = randomArray();
	var color2Array = randomArray();
	var newColor1 = RGBToHex(...color1Array);
	var newColor2 = RGBToHex(...color2Array);

	color1.value = newColor1;
	color2.value = newColor2;
	setGradient()
}

setGradient();

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

button.addEventListener('click', randomGradient);