var gameState = "play";

var backGround,ground,fireBall;
var backGround_image,fireBall_Image;

var obstacleGroup;

var ninja;
var ninja_Animation;



function preload(){
  ninja_Animation=loadAnimation("/Images/1.png","/Images/2.png","/Images/3.png","/Images/4.png","/Images/5.png","/Images/6.png","/Images/7.png","/Images/8.png","/Images/9.png","/Images/10.png");

  backGround_image = loadImage("/Images/BG.png");
  fireBall_Image = loadImage("/Images/FireBall.png");
}

function setup() {
  createCanvas(1600,700);
  
  backGround = createSprite(700,350,70,70);
  backGround.addImage(backGround_image);
  backGround.scale=1.0

  obstacleGroup = new Group();

  ground=createSprite(600,600,1000,20);
  
  ninja = createSprite(400, 500, 100, 50);
  ninja .addAnimation("ninja",  ninja_Animation);
  //ninja .addAnimation("fight",fight_Animation );
  ninja.scale=0.3



}

function draw() {
  background(0);  
  drawSprites();
  if (gameState === "play") {
  if(keyDown("F") && ninja.y>=350) {
   ninja.velocityY = -15;
  }
 
  ninja.velocityY = ninja.velocityY + 0.8
}

ninja.collide(ground);

if (keyWentDown("space")) {
  create_FireBall();
  
}
 
}

function create_FireBall() {
  var fireBall = createSprite(100, 100, 60, 10);
  fireBall.addImage(fireBall_Image);
  fireBall.x = 360;
  fireBall.y=ninja.y;
  fireBall.velocityX = 50;
  fireBall.lifetime = 100;
  fireBall.scale = 0.4;
 // fireBall.add(arrow);
   
}

/*function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    obstacle.velocityX = -6;
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       case 5: obstacle.addImage(obstacle5);
               break;
       case 6: obstacle.addImage(obstacle6);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }*/