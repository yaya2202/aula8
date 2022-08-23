var box1,box2,box1_img;

function preload(){
    box1_img = loadImage("space.png");
}

function setup(){
    createCanvas(500,500);
    box1 = createSprite(250,250,30,30);
    box1.addImage(box1_img);
    box1.scale = 0.2;
    box2 = createSprite(250,250,30,30);
    box2.shapeColor="red";
}

function draw(){
    background("lightBlue");
    box1.velocityX = 1;
    box2.velocityX = 2;
    box1.velocityY = -1;
    box2.velocityY = -2;

    drawSprites();
}