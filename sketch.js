var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 80,50);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(800,400,50,80);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
}

function draw() {
  background(0);  
movingRect.y = World.mouseY;
movingRect.x =World. mouseX;
console.log(movingRect.x - fixedRect.x );

if(  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
  movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
 && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
 movingRect.y - fixedRect.y< movingRect.height/2 + fixedRect.height/2 
 ){
 movingRect.shapeColor = "pink";
 fixedRect.shapeColor = "pink";
}
  drawSprites();
}