let dots = [];

function setup() {
 // put setup code here
  createCanvas(600, 600);
  colorMode(HSB)
  frameRate(60);
  noStroke();

  for (let i = 0; i < 100; i++) 
  {
    let dot = new Dot(width/2, height/2, i);
    dots.push(dot);
  }
}

function draw() {
  // put drawing code here
  background(0,0,0);
  for (let dot of dots) 
  {
    dot.draw();    
  }

  let hue = mouseX/width * 360;
  fill(hue, 100, 100)
  
  //fill(mouseX/600 * 360, 100, 100)
  //stroke(255, 255, 255);
  //strokeWeight(10);
  ellipse(mouseX, mouseY, 80, 180);
}


class Dot 
{
  constructor(x, y, i) 
  {
    this.x = x;
    this.y = y;
    this.index = i;
    this.hue = Math.random() * 360;
    this.radius = 100 + dots.length - this.index * 2;

    this.velocityX = random(-5, 5);
    this.velocityY = random(-5, 5);
  }

  draw() 
  {
    //this.x += -0.5 + Math.random();
    //this.y += -0.5 + Math.random();

    //this.x += map(Math.random(), 0, 1, -1, 1);
    //this.y += map(Math.random(), 0, 1, -1, 1);

    this.x += this.velocityX;
    this.y += this.velocityY;

    fill(this.hue, 60, 100);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}