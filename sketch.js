var Circle = function(name,x,y,size, fillColor) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.name = name;

  this.renderEllipse = function () {
    fill(fillColor)
    ellipse(this.x, this.y, this.size, this.size)
  }

  this.distanceToMouse = function() {
    return dist(mouseX, mouseY, this.x, this.y);
  }
}

var myCircle = new Circle("blue", 50,50,50, 'blue');
var myOtherCircle = new Circle("red", 200,200,20, 'red');

var myCircles = [myCircle, myOtherCircle];


function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(153);
  for (var i = 0; i < myCircles.length; i++) {
    myCircles[i].renderEllipse();
    if (i > 0) {
        if (myCircles[0].distanceToMouse() < myCircles[1].distanceToMouse()){
          console.log(myCircles[0].name)
        } else {
          console.log(myCircles[1].name)
        }
    }

  }
}
