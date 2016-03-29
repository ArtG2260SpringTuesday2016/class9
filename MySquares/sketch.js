var Square = function(name, x, y,size, fillColor) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.name = name;

 this.renderSquare= function(){
    noStroke();
    fill(fillColor);
    rect(this.x, this.y, this.size, this.size);
  }
  
  this.distanceToMouse= function(){
  return dist(mouseX, mouseY, (this.x + this.size/2), (this.y + this.size/2));
 }
}

var mySquare1 = new Square("Frisbee", 40, 400, 50, '#3B5323');
var mySquare2 = new Square("Racecar", 100, 420, 60, '#e50000');
var mySquare3 = new Square("Barbie", 200, 410, 45, '#488214');
var mySquare4 = new Square("Basket Ball", 350, 400, 50, '#cc0000');
var mySquare5 = new Square("Legos", 430, 420, 50,'#990000');
var mySquare6 = new Square("Video Game", 500, 400, 50, '#458B00');

var mySquares = [mySquare1, mySquare2, mySquare3, mySquare4, mySquare5, mySquare6];

function setup() {
  createCanvas(600, 500);
}

function draw() {
background(153);

  for (var i = 0; i < mySquares.length; i++) {
    mySquares[i].renderSquare();
    if (i > 0) {
        if (mySquares[0].distanceToMouse() < 25){
          noStroke();
          fill(51);
          textSize(12);
          text(mySquare1.name, 40, 390);
        } 
        if (mySquares[1].distanceToMouse() < 30){
          noStroke();
          fill(51);
          textSize(12);
          text(mySquare2.name, 100, 410);
        } 
        if (mySquares[2].distanceToMouse() < 20){
          noStroke();
          fill(51);
          textSize(12);
          text(mySquare3.name, 200, 400);
        } 
        if (mySquares[3].distanceToMouse() < 20){
          noStroke();
          fill(51);
          textSize(12);
          text(mySquare4.name, 350, 390);
        } 
        if (mySquares[4].distanceToMouse() < 20){
              noStroke();
          fill(51);
          textSize(12);
          text(mySquare5.name, 430, 410);
        } 
        if (mySquares[5].distanceToMouse() < 20){
              noStroke();
          fill(51);
          textSize(12);
          text(mySquare6.name, 500, 390);
        }
  
  fill(51);
  textSize(30);      
  text("Touch a box to find out whats inside!", 50, 30);
  fill('#486030');
  triangle(300, 55, 500, 380, 100, 380);
  fill('#8B4C39');
  rect(275,380,50,60);
}
}
}



