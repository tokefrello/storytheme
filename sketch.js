//initialize Figures array
//define background and Figure color
//initialize GUI
//initialize sounds

var figures = [];

function setup() {
	createCanvas(displayWidth, displayHeight);

	//populate Figures array
	f = new Figure();
	for (var i = 0; i < 10; i++) {
		figures.push(new Figure());
	}
}

function draw() {
	background(0, 0, 255);
	//update Figures
	for (var i = 0; i < 10; i++) {
		figures[i].move();
		figures[i].display();
	}
	//play sounds
	//make GUI operations
}

//Figure class
function Figure() {
	this.loc = createVector(random(width), random(height));
	this.vel = createVector(random(-1, 1), random(-1, 1));
	this.color = color(255);
	this.size = random(4, 8);

	this.move = function() {
		this.loc.add(this.vel);
		this.checkBoundaries();
	}

	this.checkBoundaries = function() {
		if (this.loc.x > width+this.size/2) {
      		this.loc.x = -this.size/2;
    	}
    	if (this.loc.x < 0-this.size/2) {
      		this.loc.x = width+this.size/2;
    	}
    	if (this.loc.y > height+this.size/2) {
      		this.loc.y = -this.size/2;
    	}
    	if (this.loc.y < 0-this.size/2) {
      		this.loc.y = height+this.size/2;
    	}
	}
	
	this.display = function() {
		fill(this.color);
		ellipse(this.loc.x, this.loc.y, this.size, this.size);
	}
};