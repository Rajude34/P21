var bullet 
var wall
var thickness
var speed
var weight

function setup() {
createCanvas(1600,400);
wall = createSprite(1200,200,thickness,height/2)
}

function draw() {
thickness = random(22,83)
speed = random(223,321)
weigt = random(30,52)
wall.shapeColor = color(80,80,80)
}

function hasCollided(lbullet, lwall){
bulletRightEdge = lbullet.x +lbullet.width
wallLeftEdge=lwall.x

if(bulletRightEdge>=wallLeftEdge){
return true
}
return false
}

if(hasCollided(bullet,wall)){

bullet.velocityx=0
var damage = 0.5 * weight * speed*  speed/ (thickness *thickness *thickness)

|

if(damage>10){

  wall.shapeColor = color(255,0,0)

}


if(damage>10){

  wall.shapeColor = color(255,0,0)

}


}
