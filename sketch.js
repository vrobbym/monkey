
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
monkey = createSprite(80,500,20,20)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.2
  ground = createSprite(300,570,1200,10)
  ground.velocityX = -5

  foodGroup = new Group()
  obstaclesGroup = new Group()
}



function draw() {
background("white")
  if(ground.x<0 ){
    ground.x = ground.width/2
  }
  spawnBanans()
 spawnobstacles()
  drawSprites()
}


function spawnBanans(){
  if(frameCount%80===0){
    banana= createSprite(600,200,20,20)
    banana.addImage(bananaImage)
    banana.velocityX=-6
    banana.scale = 0.2
    banana.y = random(250,400)
    banana.lifetime = 100
    monkey.depth = banana.depth+1
    foodGroup.add(banana)
  }
}

function spawnobstacles(){
  if(frameCount%300===0){
    obstacles= createSprite(600,510,20,20)
    obstacles.addImage(obstaceImage)
    obstacles.velocityX=-6
    obstacles.lifetime = 100
    obstacles.scale = 0.3
    obstaclesGroup.add(obstacles)
  }
}




