var bgimage;
var spaceshipimage;
var spaceship;
var meteorimage;
var meteor;
var meteorGroup;
var star, starGroup, starImage;
var bg;
var score=0;


function preload(){
bgimage=loadImage("background.jpg");
spaceshipimage=loadImage("spaceship.png");
meteorimage=loadImage("obstacle1.png");
starImage=loadImage("star.png")

}



function setup() {
  createCanvas(900, 600);
  bg=createSprite(450,300,900,600);
  bg.addImage(bgimage);
  bg.scale=1.2
  bg.velocityY=1;
  spaceship=createSprite(200,500,30,50);
  spaceship.addImage(spaceshipimage);
  spaceship.scale=0.3;

 meteorGroup=createGroup();
 starGroup=createGroup();

  
}

function draw() {
  background(0);


  if(keyIsDown(LEFT_ARROW)){
    spaceship.x=spaceship.x-4
  }

  if(keyIsDown(RIGHT_ARROW)){
    spaceship.x+=4
  }


if(bg.y>300){
  bg.y=200;
}
    if(starGroup.isTouching(spaceship)){
      score+=10;
      starGroup.destroyEach();
    }
    
  spawnMeteors();
  spawnStars();
  drawSprites();
  textSize(30);
  fill("white")
  text("Score:"+score,700,50)
  console.log(mouseX)
}

function spawnMeteors(){
  if (frameCount % 60 === 0){
    meteor=createSprite(Math.round(random(100,800)),100);
    meteor.addImage(meteorimage);
    meteor.scale=0.3;
    meteor.velocityY=6;
    meteorGroup.add(meteor);
  } 
  
}

function spawnStars(){
  if (frameCount % 90 === 0){
    star=createSprite(Math.round(random(100,800)),100);
    star.addImage(starImage);
    star.scale=0.2;
    star.velocityY=4;
    starGroup.add(star);
  }
}