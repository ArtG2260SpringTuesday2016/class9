var circleX = 10;


function setup() {
  createCanvas(500,500);
  background(60,0,70);
}

function draw() {
  noStroke();
  fill(30,230,30);
  ellipse(mouseX,mouseY,circleX,circleX);

circleX = circleX + .5;
}

function mousePressed () {
 background(60,0,70);
}