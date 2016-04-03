function setup (){
  createCanvas (800, 800)
  
}


function draw(){
  background('gray');
  var mouseover = dist(mouseX, mouseY, 100, 100); 
  var mouseover1 = dist(mouseX, mouseY, 300, 100); 
  var mouseover2 = dist(mouseX, mouseY, 300, 300); 
  var mouseover3 = dist(mouseX, mouseY, 100, 300); 
  
  if(mouseover < 50)
  {
    MouseSquare = true;
  }else
    {MouseSquare = false;
  }
  
   if(MouseSquare == true)
  {
    fill('yellow');
  }else
    {fill('orange'); 
  }

   rect(100, 100, 100, 100);
   rect(300, 100, 100, 100);
   rect(300, 300, 100, 100);
   rect(100, 300, 100, 100);
}