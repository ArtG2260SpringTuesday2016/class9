var Circle = function(x,y,size, fillColor) {
  this.x = x;
  this.y = y;
  this.size = size;

  this.renderEllipse = function () {
    fill(fillColor)
    ellipse(this.x, this.y, this.size, this.size)
  }

  this.distanceToMouse = function() {
    return dist(mouseX, mouseY, this.x, this.y);
  }
}

var myFirstCircle = new Circle(100,100,50, 'blue');
var mySecondCircle = new Circle(200,200,50, 'red');
var myThirdCircle = new Circle(300,300,50, 'yellow')

var myCircles = [myFirstCircle, mySecondCircle, myThirdCircle];


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(153);
  for (var i = 0; i < myCircles.length; i++) {
    myCircles[i].renderEllipse();
    if (i > 0) {
        if (myCircles[0].distanceToMouse() < myCircles[0].size/2){
          textSize(20);
          fill('yellow');
          text("beep",mouseX,mouseY);
        }
        if (myCircles[1].distanceToMouse() < myCircles[1].size/2){
          myCircles[1].size--;
          textSize(20);
          fill('black');
          text("Ahhh!",mouseX,mouseY);
        }
        if (myCircles[2].distanceToMouse() < myCircles[2].size/2){
          textSize(20);
          fill('blue');
          text("boop",mouseX,mouseY);
        }  
    }

  }
}
