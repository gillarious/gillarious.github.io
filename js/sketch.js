var x = 0;

function setup() {
	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent('canvas-wrap');
}

function draw() {
	ellipse(x, height/2, 20, 20);
	x = x + 1;
}

window.onresize = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;  
	canvas.size(w,h);
	width = w;
	height = h;
};