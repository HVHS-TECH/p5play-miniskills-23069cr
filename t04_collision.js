/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
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
platform_1 = new Sprite(300, 300, 600, 50, 'k') .rotation = 7;
platform_1 = new Sprite(700, 500, 600, 50, 'k') .rotation = -7;
platform_1 = new Sprite(500, 800, 1000, 50, 'k') .bounciness  = 10;
platform_1 = new Sprite(0, 500, 1000, 50, 'k') .rotation = 90;
platform_1 = new Sprite(1000, 500, 1000, 50, 'k') .rotation = 90;
platform_1 = new Sprite(500, 0, 1000, 50, 'k') .bounciness  = 10;
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