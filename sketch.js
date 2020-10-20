var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, ground2;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,500);
  
  ground = createSprite(400,490,900,10);
  ground2 = createSprite(300,460,600,10);
  ground.visible = false;
  ground.velocityX = -6;
  
  monkey = createSprite(30,450,70,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.12;

  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {

  background("lightblue");
  drawSprites();
  
  monkey.collide(ground2);
  
  if(ground.x < 0){
    ground.x = ground.width / 2;
  }
  
  monkey.velocityY = monkey.velocityY + 0.7;
  
  if(keyDown("space")){
    monkey.velocityY = -7; 
  }
  
  bananas();
  stones();
  
  score = score + Math.round(frameRate() / 60);
  
  text("Score : " + score,500,100);
  
}

function bananas(){
  
  if(frameCount % 150 === 0){
    
    banana = createSprite(700,50,20,20);
    banana.addImage(bananaImage);
    FoodGroup.add(banana);
    banana.scale = 0.1;
    banana.velocityX = -2;
    banana.lifetime = 360;
    banana.y = Math.round(random(50,400));
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
  }
  
}

function stones(){
  
  if(frameCount % 100 === 0){
    
    obstacle = createSprite(700,425,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -6;
    obstacleGroup.add(obstacle);
    
  }
  
}


