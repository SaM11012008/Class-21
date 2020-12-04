var rect1, rect2, rect3, rect4, rect5, rect6;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 70);
  rect1.shapeColor = "green";
  rect2 = createSprite(200,200,80,50);
  rect2.shapeColor = "green";
  rect3 = createSprite(100,100,50,50);
  rect3.shapeColor = "green";
  rect4 = createSprite(200,100,50,50);
  rect4.shapeColor = "green";
  rect5 = createSprite(300,100,50,50);
  rect5.shapeColor = "green";
  rect6 = createSprite(400,100,50,50);
  rect6.shapeColor = "green";

  rect1.velocityX = 6;
  rect1.velocityY = 6;
}

function draw() {
  background("black");  

  rect2.x = mouseX;
  rect2.y = mouseY;

  if(isTouching(rect2,rect1)){
    rect1.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }
  else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  bounceOff(rect1,rect2);

  drawSprites();
}
