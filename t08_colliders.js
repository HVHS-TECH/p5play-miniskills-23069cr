
/*******************************************************/
// P5.play: t07_groups
// Create aliens and add to a group on mouse click
// Written by ???
/*******************************************************/
  
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
cnv = new Canvas(1000, 1000);2

wallLH  = new Sprite(0, 1000/2, 8, 1000, 'k') .bounciness = 0.5;
wallRH  = new Sprite(1000, 1000/2, 8, 1000, 'k') .bounciness = 0.5;
wallTop = new Sprite(500, 28, 1000, 8, 'k') .bounciness = 0.5;
wallBot = new Sprite(500, 975, 1000, 8, 'k') .bounciness = 0.5;

mousesprite = new Sprite(500, 500, 40, 40, 'd');
mousesprite.color = 255,200,200;
mousesprite.rotationSpeed = 2;

ball_1 = new Sprite(width/2, height/2, 20, 'd');
ball_1.vel.x = 10;
alienGroup = new Group();
if (ball_1.bounciness <= 1) {
  ball_1.bounciness = 1;
}
for (i = 0; i < 100; i++) {
  alien = new Sprite();
  alien.vel.x = 3;
  alien.vel.y = 4;
  alien.bounciness = 1;
  alien.friction = 0;
  alienGroup.add(alien);
}

alienGroup.collides(ball_1, func2Call);
function func2Call(_ssss, _ball_1) {
// Delete the alien which was hit
_ssss.remove();
}
}
  
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background(255, 200, 200);
  mousesprite.moveTowards(mouseX, mouseY, 0.05);
if (mouse.presses()) {
mousesprite.moveTo(mouseX, mouseY, 1);
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/
