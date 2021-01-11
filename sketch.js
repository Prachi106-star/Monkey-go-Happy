var bananaImage ;
var obstacleGroup , obstacleImage ;
var score , background1 ;
var monkey , monkey_running ;

function preload(){
  
monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png"/*,"Monkey_06","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"*/);
background_Image = loadImage("jungle.jpg");
  
}


function setup() {
  createCanvas(400, 400);
  
background1 = createSprite(200,200,400,400);
background1.addImage(background_Image);
}

function draw() {
  background(220);
  drawSprites();
}