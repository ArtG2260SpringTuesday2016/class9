function setup (){
  createCanvas (500, 500)
}


function draw(){
  background(50)
  
  var distance = dist(mouseX, mouseY, 200, 200); 
  
  if(distance < 50)
  {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }
  
   if(isOverCircle == true)
  {
    fill(random(1-256));
    cursor(HAND);
    text ('YYYEEEAAA BBOOOOYYYY!!!!!!!', 250, 250)
  } else {
    fill(100); 
    cursor(ARROW);
  
  }
   ellipse(200, 200, 100, 100);
  
 
  
}