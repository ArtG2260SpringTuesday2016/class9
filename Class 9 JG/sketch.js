var Circle = function(name,x,y,size, fillColor) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.fillColor = fillColor;
  
  this.renderEllipse = function (color) {
    fill(color)
    ellipse(this.x, this.y, this.size, this.size)
  }

  this.calculateDistance = function (){
    return dist(mouseX, mouseY, myCircle.x, myCircle.y);
  }
  
  
  // mouseX, mouseY 
  // dist()
  // this.x, this.y
}

var myCircle = new Circle("blue", 50,50,50, 'blue');
var mouseOnCircle;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(153);
  
  
  // check if mouse is over circles
  var distance = myCircle.calculateDistance();
  // get distance between mouse and circle
  // var distance = dist(mouseX, mouseY, myCircle.x, myCircle.y); moved into a new function on it's own
  var fillColor; 
  
  // if the distance is less than the circle's radius you are on top of the circle
  if(distance < myCircle.size/2)
  {
    mouseOnCircle = true;
  } else {
    mouseOnCircle = false;
  }
  
  // draw a circle
  if(mouseOnCircle == true)
  {
    fillColor = color(random(255), random(255), random(255));
    console.log("on the circle");
  } else {
    fillColor = myCircle.fillColor;
    console.log("not on the circle");
  }
  myCircle.renderEllipse(fillColor);
}





