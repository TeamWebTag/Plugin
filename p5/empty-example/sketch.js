x = 0;

function setup() {
	cnv = createCanvas(windowWidth, windowHeight);
	cnv.parent('drawing_canvas');
	colorMode(HSB, 360, 100, 100);
	noStroke();
	noLoop();
	frameRate(250);
}

function draw() {
	x = (x + 1) % 360;
	var color = document.getElementById('color').name;
	if (mouseIsPressed && color === "allok"){
		fill(document.getElementById('color').style.backgroundColor);
		ellipse(mouseX, mouseY, 10, 10);
	}
	else if (mouseIsPressed && color === "clearbitch"){
		clear();
	}
}

function mousePressed(){
	loop();
}
function mouseReleased(){
	noLoop();
}
