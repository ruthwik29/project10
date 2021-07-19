var ship,ship_sailing,sea,seaimg

function preload(){
ship_sailing=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimg=loadImage("sea.png")

}
function setup(){
createCanvas(400,400);
sea=createSprite(400,200)
sea.addImage(seaimg)
sea.scale=0.5
ship = createSprite(200,200)
ship.addAnimation("sailing",ship_sailing)
ship.scale=0.25
} 

function draw() {
  background("blue");
  sea.velocityX=-3
if(sea.x<0){
  sea.x=sea.width/8
}
 drawSprites()
}