var balloon;



function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  var balloon = createSprite(250,250);


  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10;
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
  }
}