/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
// Written by ???
/*******************************************************/
function preload() {
   imgFace = loadImage('../assets/images/houseAsAHouseFace.png');
}
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
cnv = new Canvas(1000, 900);
Rect = new Sprite(500, 200, 100, 300);
Rect.image = (imgFace);
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
background ('grey')

	if (kb.pressing('left')) {
Rect.vel.x = -2;
}
else if (kb.pressing('right')) {   
Rect.vel.x = 2;
}
else if (kb.pressing('down')){
	Rect.vel.y = 2;
}
else if (kb.pressing('up')){
	Rect.vel.y = -2;
}


if (kb.released('left')) {
Rect.vel.x = 0;
}
else if (kb.released('right')){
Rect.vel.x = 0;
}
else if (kb.released('down')){
Rect.vel.y = 0;
}
else if (kb.released('up')){
Rect.vel.y = 0;
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/