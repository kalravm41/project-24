var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper,log,log1,log2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 paper = new Paper(100,100,20);
	 log = new Log1(620,70,250,-PI);
	 log1 = new Log(750,200,120,PI);
	 log2 = new Log(500,200,120,PI);

	//World.add(world,paper);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = new Ground(400, 630, 1000, 20);
   // ground.fill("red");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  log.display();
  log1.display();
  log2.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-7});
		paper.body.setvelocityY = paper.body.velocityY-0.8;
	}
}



