
var rectangles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 4; i++) {
    rectangles[i] = new rectangle();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < rectangles.length; i++) {
    
    rectangles[i].display();
   
  }
}

function rectangle() {
  this.x = random(0, width);
  this.y = random(0, height);
  if (mouseX >300 && mouseX < 600)
    fill(255,0,20)
  

  this.display = function() {
    stroke(255);
    if (mouseX >300 && mouseX < 600)
    fill(255,0,20)
    if (mouseY > 300 && mouseY < 600)
    fill(20,40,60)
    rect(this.x, this.y, 100, 60);
   
  }

  
}