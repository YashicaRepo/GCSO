var wall1, wall2, wall3, wall4;
var b1, b2, b3;
var car1, car2, car3, car4;
var speed1, speed2, speed3, speed4; 
var weight;

function setup() {
  createCanvas(1600,400);

  speed1=random(55,98)
  speed2=random(55,98)
  speed3=random(55,98)
  speed4=random(55,98)

  weight=random(400,1500)

  wall1=createSprite(1400, 40, 20, 50);

  b1=createSprite(400, 200, 2100, 5);
  b1.shapeColor="white";

  wall4=createSprite(1400, 355, 20, 50);

  b2=createSprite(400, 305, 2100, 5);
  b2.shapeColor="white";

  wall3=createSprite(1400, 255, 20, 50);

  b3=createSprite(400, 95, 2100, 5);
  b3.shapeColor="white";

  wall2=createSprite(1400, 155, 20, 50);

  car1=createSprite(50,50,50,10);
  car2=createSprite(50,150,50,10);
  car3=createSprite(50,250,50,10);
  car4=createSprite(50,350,50,10);

  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;
}


function draw() {
  background(0,0,0);  

  // car1
  if(wall1.x-car1.x < (car1.width+wall1.width/2)){
    car1.velocityX=0;
    var deformation=0.5*width*speed1*speed1/22509;
    
    if(deformation>180){
      car1.shapeColor=color(255,0,0);
    }
    
    if(deformation<180 && deformation>100){
      car1.shapeColor=color(130,230,0);
    }

    if(deformation<100){
      car1.shapeColor=color(0,255,0);
    }
  }

  // car2
  if(wall2.x-car2.x < (car2.width+wall2.width/2)){
    car2.velocityX=0;
    var deformation=0.5*width*speed2*speed2/22509;
    
    if(deformation>180){
      car2.shapeColor=color(255,0,0);
    }
    
    if(deformation<180 && deformation>100){
      car2.shapeColor=color(130,230,0);
    }

    if(deformation<100){
      car2.shapeColor=color(0,255,0);
    }
  }

  // car3
  if(wall3.x-car3.x < (car3.width+wall3.width/2)){
    car3.velocityX=0;
    var deformation=0.5*width*speed3*speed3/22509;
    
    if(deformation>180){
      car3.shapeColor=color(255,0,0);
    }
    
    if(deformation<180 && deformation>100){
      car3.shapeColor=color(130,230,0);
    }

    if(deformation<100){
      car3.shapeColor=color(0,255,0);
    }
  }

  
  // car4
  if(wall4.x-car4.x < (car4.width+wall4.width/2)){
    car4.velocityX=0;
    var deformation=0.5*width*speed4*speed4/22509;
    
    if(deformation>180){
      car4.shapeColor=color(255,0,0);
    }
    
    if(deformation<180 && deformation>100){
      car4.shapeColor=color(130,230,0);
    }

    if(deformation<100){
      car4.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}