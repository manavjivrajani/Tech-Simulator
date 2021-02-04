//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
//var engine,world;

var Timer=5
var sleepingbutton

function preload(){
standingimg=loadImage("standing.png")
sittingimg=loadImage("sitting.png")
sleepingimg=loadImage("sleeping.png")
coinimg=loadImage("coin.png")
roomimg=loadImage("living_room.JPG")
sleepingbuttonimg=loadImage("sleep button.png")
}

function setup() {
  createCanvas(800,400);
  
  standing=createSprite(600,280)
  standing.addImage(standingimg)
  standing.scale=0.2
  standing.visible=false

  sitting=createSprite(500,280)
  sitting.addImage(sittingimg)
  sitting.scale=0.2
  
  sleepingbutton=createSprite(320,260,20,30)
  sleepingbutton.addImage(sleepingbuttonimg)
  sleepingbutton.scale=0.05

}

function draw() {
  background(roomimg);
  
  if(frameCount%60===0){
  coin=createSprite(500,280)
  coin.addImage(coinimg)
  coin.scale=0.3
  coin.velocityY=-5 
  }

  if(frameCount%60===0 && Timer>0){
  Timer--  
  }

  /*if(Timer===0){ 
  coin.velocityY=0
  standing=createSprite(400,280)
  standing.addImage(standingimg) 
  standing.scale=0.2 
  sitting.visible=false
  coin.visible=false
  }*/

  if(mousePressedOver(sleepingbutton)){
    sleeping=createSprite(320,260)
    sleeping.addImage(sleepingimg)
    sleeping.scale=0.2
    if(Timer===0){
    standing.visible=false
    sitting.visible=false
    coin.velocityY=0
    coin.visible=false
    }
  }

  drawSprites();
  fill("black")
  textSize(80)
  text(Timer,600,80)
}