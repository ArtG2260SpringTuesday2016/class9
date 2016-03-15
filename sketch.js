var Circle = function(x,y,size) {
  this.x = x;
  this.y = y;
  this.size = size;

  this.addPosn = function() {
    console.log(this.x + this.y)
  }
}

var myCircle = new Circle(5,5,50);
var myOtherCircle = new Circle(30,2,20);

var myCircles = [myCircle, myOtherCircle];


function setup() {
  createCanvas(600, 500);
  background(153);
}

function draw() {

}
