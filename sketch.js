const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var player;
var virus1,virus2,virus3;
var coin1,coin2;
var wall1,wall2;
var i;
var coin;

var firstColumnArray=new Array();
var secondColumnArray=new Array();
var thirdColumnArray=new Array();
var fourthColumnArray=new Array();
var fifthColumnArray=new Array();
var sixthColumnArray=new Array();
var seventhColumnArray=new Array();
var eighthColumnArray=new Array();
var ninthColumnArray=new Array();
var tenthColumnArray=new Array();
var eleventhColumnArray=new Array();
var twelvthColumnArray=new Array();
var thirteenthColumnArray=new Array();
var fourteenthColumnArray=new Array();

function preload(){
  player_image = loadImage("scientist.png");
  coin_image = loadImage("coin.png");
  virus_image = loadImage("virus.png");
}
  
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    player = createSprite(30,200,30,80);
    player.addImage("scientist" , player_image);
    player.scale = 0.08;
  virus1 = createSprite(140,240,20,20);
  virus1.addImage("corona",virus_image);
  virus1.scale = 0.15;
  virus1.velocityX = 1.5;
  

  virus2 = createSprite(640,100,20,20);
  virus2.addImage("corona",virus_image);
  virus2.scale = 0.15;
  virus2.velocityX = 2;

  virus3 = createSprite(400,140,20,20);
  virus3.addImage("corona",virus_image);
  virus3.scale = 0.15;

  virus4 = createSprite(600,250,20,20);
  virus4.addImage("corona",virus_image);
  virus4.scale = 0.15;

  virus5 = createSprite(600,250,20,20);
  virus5.addImage("corona",virus_image);
  virus5.scale = 0.15;

  virus4 = createSprite(350,330,20,20);
  virus4.addImage("corona",virus_image);
  virus4.scale = 0.15;
 
  coin1 = createSprite(60,220,20,20);
  coin1.addImage("point" , coin_image);
  coin1.scale = 0.05;
  
  
  var xpos1 = 250;
  for(i = 1; i<=5; i++){
    var coin = createSprite(55,xpos1,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos1+=30;
    firstColumnArray.push(coin);
    
  }
  var xpos2 = 250;
  for(i = 1; i<=5; i++){
    var coin = createSprite(20,xpos2,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos2+=30;
    secondColumnArray.push(coin);
  }

  coin12 = createSprite(85,370,20,20);
  coin12.addImage("point" , coin_image);
  coin12.scale = 0.05;
  
  var xpos3 = 370;
  for(i = 0; i<=11; i++){
    coin = createSprite(120,xpos3,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos3-=30;
    thirdColumnArray.push(coin);
  }

  var xpos4 = 130;
  for(i = 0; i<=4; i++){
    coin = createSprite(xpos4,20,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos4+=30;
    fourthColumnArray.push(coin);
  }

  var xpos5 = 550;
  for(i = 0; i<=4; i++){
    coin = createSprite(xpos5,20,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos5+=30;
    fifthColumnArray.push(coin);

  }

  var xpos6 = 50;
  for(i = 0; i<=4; i++){
    coin =createSprite(670,xpos6,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos6+=30;
    sixthColumnArray.push(coin);

  }

  var xpos7 = 640;
  for(i = 0; i<=11; i++){
    coin = createSprite(xpos7,185,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos7-=30;
    seventhColumnArray.push(coin);

  }

  var xpos8 = 305;
  for(i = 0; i<=4; i++){
    coin = createSprite(280,xpos8,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos8-=30;
    eighthColumnArray.push(coin);

  }

  var xpos9 = 305;
  for(i = 0; i<=5; i++){
    coin = createSprite(xpos9,330,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos9+=30;
    ninthColumnArray.push(coin);

  }
  var xpos10 = 640;
  for(i = 0; i<=6; i++){
    coin = createSprite(xpos10,330,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos10+=30;
    tenthColumnArray.push(coin);

  }
  coin68 = createSprite(820,305,20,20);
  coin68.addImage("point" , coin_image);
  coin68.scale = 0.05;
    xpos11 = 820;
  for(i = 0; i<=16; i++){
    coin = createSprite(xpos11,280,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos11-=30;
    eleventhColumnArray.push(coin);

  }

  xpos12 = 810;
  for(i = 0; i<=8; i++){
    coin = createSprite(xpos12,120,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos12+=30;
    twelvthColumnArray.push(coin);

  }

  xpos13 = 220;
  for(i = 0; i<=2; i++){
    coin = createSprite(910,xpos13,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos13+=30;
    thirteenthColumnArray.push(coin);

  }

  xpos14 = 280;
  for(i = 0; i<=2; i++){
    coin = createSprite(1070,xpos14,20,20);
    coin.addImage("point" , coin_image);
    coin.scale = 0.05;
    xpos14+=30;
    fourteenthColumnArray.push(coin);

  }
  
  wall = createSprite(4,200,10,400);
  wall1 = createSprite(85,150,10,300);
  wall2 = createSprite(20,225,40,10);
  wall3 = createSprite(400,105,400,10); 
  wall4 = createSprite(1180,230,40,10);
  wall5 = createSprite(400,205,200,10);
  wall6 = createSprite(600,5,1200,10);
  wall7 = createSprite(195,250,10,300);
  wall8 = createSprite(685,105,10,210);
  wall9 = createSprite(580,205,200,10);
  wall10 = createSprite(305,250,10,100);
  wall11 = createSprite(600,395,1200,10);
  wall12 = createSprite(550,305,500,10);
  wall13 = createSprite(795,155,10,110);
  wall14 = createSprite(895,255,10,110);
  wall15 = createSprite(940,105,300,10);
  wall16 = createSprite(940,205,100,10);
  wall17 = createSprite(1085,225,10,250);
  wall18 = createSprite(1195,200,10,400);
 
}

function draw(){
  background("lightblue");
  Engine.update(engine);
  var arrayLength = firstColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
   firstColumnArray[i].display();
}


if(keyDown(UP_ARROW)){
  player.y=player.y-2;
}

if(keyDown(DOWN_ARROW)){
  player.y=player.y+2;
}

if(keyDown(LEFT_ARROW)){
  player.x=player.x-2;
}

if(keyDown(RIGHT_ARROW)){
  player.x=player.x+2;
}

 virus1.bounceOff(wall1);
  virus1.bounceOff(wall7);
if(virus1.bounceOff(wall1)){
  virus1.velocityX = 2;
    
}if(virus1.bounceOff(wall7)){
  virus1.velocityX = -2;
}

virus2.bounceOff(wall3);
  virus2.bounceOff(wall8);
if(virus2.bounceOff(wall8)){
  virus2.velocityX = -1.5;
    
}if(virus2.bounceOff(wall3)){
  virus2.velocityX = 1.5;
}
 player.collide(virus1);
 
if(player.collide(virus1)){
  text("Infected",600,200);
  virus1.velocityX = 0;
  virus1.velocityY = 0;
 player.destroy();
  
}

arrayLength = secondColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    secondColumnArray[i].display();

}

arrayLength = thirdColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    thirdColumnArray[i].display();
}

arrayLength = fourthColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    fourthColumnArray[i].display();
}    

arrayLength = fifthColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    fifthColumnArray[i].display();
}    

arrayLength = sixthColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    sixthColumnArray[i].display();
}    

arrayLength = seventhColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    seventhColumnArray[i].display();
}    

arrayLength = eighthColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    eighthColumnArray[i].display();
}

arrayLength = ninthColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    ninthColumnArray[i].display();
}

arrayLength = tenthColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    tenthColumnArray[i].display();
}

arrayLength = eleventhColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    eleventhColumnArray[i].display();
}

arrayLength = twelvthColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    twelvthColumnArray[i].display();
}

arrayLength = thirteenthColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    thirteenthColumnArray[i].display();
}

arrayLength = fourteenthColumnArray.length;
for (var i = 0; i < arrayLength; i++) {
    fourteenthColumnArray[i].display();
}


player.collide(wall);
player.collide(wall1);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall8);
player.collide(wall9);
player.collide(wall10);
player.collide(wall11);
player.collide(wall12);
player.collide(wall13);
player.collide(wall14);
player.collide(wall15);
player.collide(wall16);
player.collide(wall17);
player.collide(wall18);

wall.display();
wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();
wall7.display();
wall8.display();
wall9.display();
wall10.display();
wall11.display();
wall12.display();
wall13.display();
wall14.display();
wall15.display();
wall16.display();
wall17.display();
wall18.display();
 
 coin1.display();
 coin12.display(); 
 coin68.display();
 player.display();
 virus1.display();
 virus2.display();
 virus3.display();
 virus4.display();
 
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2){
      return true;
    }else{
      return false;
    }
}