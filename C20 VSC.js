var  canvas, bg;
var together;
var cat, catImg1, catImg2;
var mouse,mouseImg1, mouseImg2;

function preload() {
    
bg = loadImage("garden.png");
catImg1 = loadAnimation("cat1.png");
mouseImg1 = loadAnimation("mouse1.png");
catImg2 = loadAnimation("cat2.png", "cat3.png");
mouseImg2 = loadAnimation("mouse2.png", "mouse3.png ");
catImg3 = loadAnimation("cat4.png");
mouseImg3 =loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
  
cat = createSprite(870, 600);
cat.addAnimation("cat sleeping", catImg1);
cat.scale = 0.2;

mouse = createSprite(200, 600);
mouse.addAnimation("mousestanding", mouse1.png);
mouse.scale = 0.15;

}

function draw() {

    background(bg);
   
if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
    cat.velocityX = 0;
    cat.addAnimation("catLastImage", catImg3);
    cat.x = 300;
    cat.scale = 0.2;
    cat.changeAnimation("catLastImage");
    mouse.addAnimation("mouseLastImage", mouseImg3);
    mouse.scale = 0.15;
    mouse.changeAnimation("mouseLastImage");
}
    drawSprites();
}


function keyPressed() {

 
if(keyCode === LEFT_ARROW){
 cat.velocityX = -5;
 cat.addAnimation("catRunning", catImg2);
 cat.changeAnimation("catRunning");

 mouse.addAnimation("mouseTeasing", mouseImg2);
 mouse.frameDelay = 25;
 mouse.changeAnimation("mouseTeasing");
}

}
