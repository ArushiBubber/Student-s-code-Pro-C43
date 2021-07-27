var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var obstacles;
var s,i;
var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
    s=loadSound("sound/sliding.mp3")
f2 = loadImage("images/f1.png");
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
 
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  
  yVel = 0;
  xVel = 0;
  obstacles=createGroup();

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
    for(i=0;i<5;i++)
  {
    w=random(200,950);
    h=random(-height*4,height-300);
  f1 = createSprite(w,h);
  //car1.debug="true";
  f1.addImage("f1",f2);
  obstacles.add(f1);
 }
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
 
  //start the game
 

  //start the game for real
  if (gameState === 1) {
    game.play();
  }

  //end the game
  
    //gameState = 2;
  }

  //display ranking
 
}
function keyPressed() {
  if (keyCode === 13 && gameState !== 1 && passedFinish === false) {
    form.enter();
    console.log("hai");
    passedFinish = true;
  }
}
