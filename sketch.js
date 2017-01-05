//initialize Figures array
//define background and Figure color
//initialize GUI
//initialize sounds

function setup() {
	createCanvas(displayWidth, displayHeight);

	//populate Figures array
}

function draw() {
	//background color
	//update Figures
	//display Figures
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
	}

	this.checkBoundaries() {
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
		//register colors
		//display shape
	}
};