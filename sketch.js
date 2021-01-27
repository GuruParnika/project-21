var canvas;
var music;
var box , surface1 , surface2 , surface3 , surface4;
var line , line1;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
      surface1 = createSprite(95,580,170,25);
      surface1.shapeColor = "blue";   
      
      surface2 = createSprite(295,580,170,25);
      surface2.shapeColor = "orange";   

      surface3 = createSprite(495,580,170,25);
      surface3.shapeColor = "purple";   

      surface4 = createSprite(700,580,170,25);
      surface4.shapeColor = "green";   

      line = createSprite(0,4,2,600);
      line.shapeColor = "lightgrey";

      line1 = createSprite(4,0,800,2);
      line1.shapeColor = "lightgrey";

   //create box sprite and give velocity
      box = createSprite(random(20,750),400,20,20);
      box.shapeColor = "white"; 
      box.velocityX = 4;
      box.velocityY = 8;

}

function draw() {
    background(rgb(169,169,169));
    drawSprites(); 
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
      box.shapeColor = rgb(0,0,255);
      music.play();
     }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
      box.shapeColor = rgb(153,0,76);
      }

     if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor =  rgb(0,100,0);
      }

      if(surface2.isTouching(box)){
         box.shapeColor = rgb(255,128,0);
         box.velocityX = 0;
         box.velocityY = 0;
         music.stop();
      }
   }