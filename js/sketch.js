const WINDOW_EDGE = 25;
const MAX_CIRCLES = 500;
var numCircles = 0;
var currentCircle = 0;
var circles = [];


function windowResized() {
	resizeCanvas(windowWidth-WINDOW_EDGE, windowHeight*5);
}


function setup() {
	var canvas = createCanvas(windowWidth-WINDOW_EDGE, windowHeight*3);
	canvas.parent('canvas-wrap');
	smooth();
}


function draw() {
	background(255);

	if (mouseIsPressed) {
		for (let i = 0; i < 2; i++) {
			circles.push(new Jitter());
			currentCircle++;
		}

		if (numCircles < circles.length){
			numCircles++;
		}

		if (currentCircle >= MAX_CIRCLES){
			currentCircle = 0;
		}
	}

	for (let i = 0; i < circles.length; i++) {
		circles[i].fade();
		circles[i].move();
		circles[i].display();
	}
};

class Jitter {
	constructor() {
		this.x = mouseX;
		this.y = mouseY;
		this.diameter = random(15, 35);
		this.speedX = random(-3, 3);
		this.speedY = random(-3, 3);
		this.myRed = 150;
		this.myGreen = random(200, 255);
		this.myBlue = random(0, 100);
		this.myAlpha = random(0, 255);
	};

	move() {
		this.x += this.speedX;
		this.y += this.speedY;

		if (this.x > windowWidth-WINDOW_EDGE){
			this.x = windowWidth-WINDOW_EDGE;
			this.speedX *= -1;
		}
		if (this.y > (windowHeight*3)-WINDOW_EDGE){
			this.y = (windowHeight*3)-WINDOW_EDGE;
			this.speedY *= -1;
		}
		if (this.x < 0){
			this.x = 0;
			this.speedX *= -1;
		}
		if (this.y < 0){
			this.y = 0;
			this.speedY *= -1;
		}
  	};

	display() {
		noStroke();
		fill(this.myRed, this.myGreen, this.myBlue, this.myAlpha);
		ellipse(this.x, this.y, this.diameter, this.diameter);
	};

	fade() {
		if (this.myAlpha > 0) {
			this.myAlpha -= 2;
		} else {
			this.myAlpha = 0;
		}
	};
};
