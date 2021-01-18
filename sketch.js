var particle,plinko,divisions,divisionHeights = 300
function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  for(var k = 0;k<= width;k = k +80){
   divisons.push(new Divisions(k, height = divisionHeights/2,10,devisionHeight))
  }
}
function preload() {
  
}
function draw() {
  background(255,255,255);  
  drawSprites();
}


 