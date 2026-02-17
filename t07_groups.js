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
	cnv = new Canvas(1000, 1000);
world.gravity.y = 10;
circle = new Sprite(500, 200, 100) .drag = 1;
circle.color = 'cyan';

wallLH  = new Sprite(0, 1000/2, 8, 1000, 'k') .bounciness = 0.5;
wallRH  = new Sprite(1000, 1000/2, 8, 1000, 'k') .bounciness = 0.5;
wallTop = new Sprite(500, 28, 1000, 8, 'k') .bounciness = 0.5;
wallBot = new Sprite(500, 975, 1000, 8, 'k') .bounciness = 0.5;

alienGroup = newGroup();
	for (i = 0; i < 100; i++) {
 	 alien = new Sprite(500, 500, 20, 20);
  alien.vel.x = 3;
  alien.vel.y = 4;
  alien.bounciness = 1;
  alien.friction = 0;
  alienGroup.add(alien);
	}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background ('grey')
}

/*******************************************************/
//  END OF APP
/*******************************************************/