var x = 0;

function setup() {
	var canvas = createCanvas(1000, 1000);
	canvas.parent('canvas-wrap');
}

function draw() {
	ellipse(x, height/2, 20, 20);
	x = x + 1;
}