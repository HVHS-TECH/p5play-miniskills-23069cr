/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(1000, 1000);
world.gravity.y = 10;
Rect = new Sprite(500, 200, 100, 300);
Rect.color = 'red';
Rect.rotationSpeed = 1;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background ('grey')

Rect.moveTowards(mouseX, mouseY, 1);
if (mouse.presses()) {
Rect.moveTo(xPos, yPos, 1);
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/