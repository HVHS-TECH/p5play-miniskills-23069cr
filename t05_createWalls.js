/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
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
wallLH  = new Sprite(0, 1000/2, 8, 1000, 'k') .bounciness = 1000;
wallRH  = new Sprite(1000, 1000/2, 8, 1000, 'k') .bounciness = 1000;
wallTop = new Sprite(500, 28, 1000, 8, 'k') .bounciness = 1000;
wallBot = new Sprite(500, 975, 1000, 8, 'k') .bounciness = 1000;
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