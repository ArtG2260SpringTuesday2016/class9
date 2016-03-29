var data = myData

var graph = function (someData) {
  for (var i = 0; i < someData.length; i++){
    var barWidth = 34
    var spacing = i * (5 + barWidth);
    var barHeight = someData[i].Loading;
    rect(spacing, 300, barWidth, barHeight * -2)

  }
}
// Creating Background
function setup() {
  createCanvas(400, 500)
  background(0)
  textSize(30)
  fill("Green"),
  text("Click the Graph!", 100, 400)
// Creating Graph
  noStroke()
  graph(myData);
}

// Adding Interactivity
function mousePressed() {
  for(i = 0; i < myData.length; i++) {
    var spd = myData[i];
    var barWidth = 34
    var spacing = i * (5 + barWidth);
    if (abs(spacing + (barWidth / 2) - mouseX) < (barWidth / 2)) {
    textSize(15)
    text(spd.Loading,spacing + (barWidth / 2),330)
  }
}


}
