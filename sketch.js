var canvas;
var background1;
var stationImg;
var station;
var obstacleImg;
var logshipImg,mathshipImg;
var mathship;
var database;
var form;
var page;
var game;
var gameState=0;
var player;
var userId;

function preload(){

  background1=loadImage("Images/bg.jpg");
  obstacleImg=loadImage("Images/5.png");
  logshipImg=loadImage("Images/sprite_0.png");
  mathshipImg=loadImage("Images/k.png");
  stationImg=loadImage("Images/sta.png")
  page=loadImage("Images/R.jpg");
  

}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  
  database = firebase.database();  
  
  game = new Game();
  game.getState();
  game.start();

 /* logship = createSprite(110,600,50,50);
  logship.addImage(logshipImg);*/
}


function draw(){
  background(page);
    
  if(gameState===1){
    game.play();
  }
  
  drawSprites();
}
