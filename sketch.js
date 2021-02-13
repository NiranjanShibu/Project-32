var ground, left, right;
var sunImage, moonImage;
var bg;
var setting = 0;
var person1, person2, person3, person4, person5;
var fist;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	sunImage = loadImage("sun.png");
	moonImage = loadImage("moon.png");
	buildingImage = loadImage("tall.png");
	fistImage = loadImage("fist.png");

	getBG();
}

function setup() {
	createCanvas(1350, 657);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, 645, width,45);
	groundSprite.shapeColor= "gray";


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 636, width, 10 , {isStatic:true} );
	World.add(world, ground);

	right = Bodies.rectangle(1450, 325, 10, height, {isStatic:true} );
	World.add(world, right);

	left = Bodies.rectangle(-80, 325, 10, height, {isStatic:true} );
	World.add(world, left);

	fist = new Fist(300, 50, 40, 40);
	person1 = new Object1(230, 500, 250, 290, "guy1.png");
	person2 = new Object1(490, 510, 290, 290, "guy2.png");
	person3 = new Object1(670, 510, 290, 290, "guy3.png");
	person4 = new Object1(850, 510, 290, 290, "guy4.png");
	person5 = new Object1(1150, 505, 290, 290, "guy5.png");

	Engine.run(engine);
  
}


function draw() {
	if(bg){

        background(bg);

    }
    else{

        background("white");

    }

	Matter.Body.setPosition(fist.body, {x: mouseX , y: mouseY});
  
	if(setting === 1){

     image(sunImage, 50, 50, 100, 100);
	 fill("yellow");

	}
	if(setting === 2){

	 image(moonImage, 50, 50, 100, 100);
	 fill("gray");

	}

  text("Disturb the people - by shaking them around - to make them go away! (Hint: going below them and then upwards will force them into the air!)", 330, 85);

  rectMode(CENTER);

  keyPressed();
  drawSprites()  
  
  person1.display();
  person2.display();
  person3.display();
  person4.display();
  person5.display();
  fist.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
  }
}

async function getBG(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/America/North_Dakota/Center");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);
    if(hour >= 6 && hour <= 18){

		bg = loadImage("morning.webp");
		setting = 1;


    }
    else{

        bg = loadImage("night.webp");
		setting = 2;

    }

}

