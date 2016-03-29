// var dummyData= [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
// var dummyDataLength = dummyData.length

// for (var i = 0; i < dummyDataLength; i ++){
  
//   dummyData[i] = normalizesData(dummyData[i]);
  
// }

// var dummyData= [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
// //a bunch of things that are just numbers- and in Javascript they are also numbers 
// dummyData[0].length === 1
// //a constructor function is your own data type 




//ellipse
//x,y,height,width
var anArray = [0, 1, 2, 3, 4, 5]
//anArray.length = 6
var Circle = function(x, y, size){ //a new data type similar to var array 
  this.size = size // Access with x.size use the keyword var becuause it is limited to scope sizes
  this.logger = function(){
    console.log(this.size);
  }
}
Circle.size

var myFristCircle = new Circle(5, 5, 20);
var mySecondCircle = new Circle(3, 5, 50);

myFristCircle.size === 20;
mySecondCircle.size === 50;

var AnArrayOfCircles = [new Circle(5, 5, 20), new Circle(3, 5, 50), myFristCircle, mySecondCircle]
for (var i = 0; i < anArrayOfCircles.length; i++){
  anArrayofCircles[i].logger();
}
