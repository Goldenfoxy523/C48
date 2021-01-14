var gameState = 1;

//var level = 1;

var dan;

//var nextLevel

var red,blue,green,yellow,obstacles;
var score = 0;
var numOfLives = 0;




function setup() {
  createCanvas(1400,windowHeight);

  //Player Character

  dan = createSprite(700,height-70,30,30);

  //Shape colour for Player Character

  dan.shapeColor = "white"; 

  redG = new Group();
  greenG = new Group();
  blueG = new Group();
  yellowG = new Group();
  

}

function draw() {
  
  background(100,100,100)

  if(gameState !=0){
    play();
  }else{
    textSize(40);
  text("GameOver", 1000,500);
  }
  
    
    
    
  
  

 // spawnObstacles();

  drawSprites();

  

  fill("blue");
  if(gameState !=0){
    textSize(30);
    text("LEVEL - " + gameState, windowWidth/2, 50)
  }
  
  textSize(20);
  text("Score : " + score, 1000,50);
  
  }

  function spawnRedObstacles(){
    if(frameCount% 60 === 0){

      //red Adventure
  
      red = createSprite(800,100,30,30);

      red.shapeColor = "red";
      red.velocityY = +10;
      red.x = Math.round(random(10,1380));
      red.lifetime = height/red.velocityY;
      redG.add(red);
    }
  }

  function spawnBlueObstacles(){
    if(frameCount %100 ===0){
      blue = createSprite(400,100,30,30);

      blue.shapeColor = "blue";
      blue.velocityY = +4;
      blue.x = Math.round(random(10,1380));
 
      blue.lifetime = height/blue.velocityY

      blueG.add(blue);
    }
  }


  function spawnGreenObstacles(){
    if(frameCount % 110 === 0){
      green = createSprite(600,100,30,30);

      green.shapeColor = "green";
      green.velocityY = +6;
      green.x = Math.round(random(10,1380));
      green.lifetime = height/green.velocityY
      greenG.add(green);
    }
  }

  function spawnYellowObstacles(){
    if(frameCount %130===0){
      yellow = createSprite(1000,100,30,30)

      yellow.shapeColor = "yellow";
      yellow.velocityY = +8;
      yellow.x = Math.round(random(10,1380));
      yellow.lifetime = height/yellow.velocityY
      yellowG.add(yellow);
    }
  }

  function spawnObstacles(){

    if(gameState === 1){
      spawnRedObstacles();
      spawnBlueObstacles();
      spawnGreenObstacles();
      spawnYellowObstacles();
    }

    else if (gameState === 2){

       var redO = spawnRedObstacles();
       redO.velocityY = red.velocityY + 2;
       redO.lifteime = height/redO.velocityY;

       var greenO = spawnGreenObstacles();
       greenO.velocityY = green.velocityY + 2;
       greenO.lifteime = height/greenO.velocityY;


       var blueO = spawnBlueObstacles();
       blueO.velocityY = blue.velocityY + 2;
       blueO.lifteime = height/blueO.velocityY;

       var yellowO = spawnYellowObstacles();
       yellowO.velocityY = yellow.velocityY + 2;
       yellowO.lifteime = height/yellowO.velocityY;


    }

    else if(gameState === 3){
      var redO = spawnRedObstacles();
       redO.velocityY = red.velocityY + 6;
       redO.lifteime = height/redO.velocityY;

       var greenO = spawnGreenObstacles();
       greenO.velocityY = green.velocityY + 6;
       greenO.lifteime = height/greenO.velocityY;


       var blueO = spawnBlueObstacles();
       blueO.velocityY = blue.velocityY + 6;
       blueO.lifteime = height/blueO.velocityY;

       var yellowO = spawnYellowObstacles();
       yellowO.velocityY = yellow.velocityY + 6;
       yellowO.lifteime = height/yellowO.velocityY;
    } 
    

      
      
     
         

  }

     



 function play(){

    if(keyDown(LEFT_ARROW)){

      dan.x = dan.x - 5;

    }else if (keyDown(RIGHT_ARROW)){
      dan.x = dan.x + 5;
    }
    
 
    spawnObstacles();
    if(score >300){
      gameState = 0
    }else if(score> 200){
      gameState = 3;
    }else if(score >100){
      gameState = 2;
    }
    
    if(dan.isTouching(blueG)){
      score = score + 2;
    }else if(dan.isTouching(greenG)){
      score = score + 5;
    }else if(dan.isTouching(yellowG)){
      score = score + 10;
    }else if(dan.isTouching(redG)){
      score = score - 10;
      numOfLives = numOfLives + 1;
      if(numOfLives === 5){
        gameState = 0; // gameover
      }
    }
  

    
  }

    

     
    

   


 




  
