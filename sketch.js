
let balls = [];
let n = 350;
let xoff = 0.1;

function setup() {
  createCanvas(400, 400); 
  ball = new Walker();
  ball2 = new Walker();
  
  for(let i=0; i<n; i=i+1) {
    let b = new Walker();
    balls.push(b);
  }
}


function draw() {
  background(220);
  fill(5, 255)
  xoff = xoff + 0.01;
  let n = noise(xoff) * width;
  line(20, 0, n, n);
  
  for (let b of balls) {
     b.update()
     b.display()
  }
 
  // for (let i=0; i<n; i++) {
  //   let b = balls[i];
  //   b.update()
  //   b.display()
  // }
}


// new way to define Object
class Walker {
  //setup values
  constructor() {
  	this.x = width/2;
  	this.y = height/2;
  	this.w = random(0, 15);
  }
  
  update() {
    //update position
  	this.x = this.x + random(-1, 1);
  	this.y = this.y + random(-1, 1);
  }
  
  display() {
    //display walker
	ellipse(this.x, this.y, this.w);
    line(this.x, this.y, this.x, 75);
    point(this.x, this.y)
  }
}