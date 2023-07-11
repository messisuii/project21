
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ball_opttions
var ground
var options
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	 ball_opttions={
      isStatic:false,
	  restitution:0.3,
	  friction:0,
	 density:1.2
	 }
	
	ball=Bodies.circle(300,690,50,ball_opttions)
	World.add(world,ball)
	
ground=new Ground(width*2,670,width,20)
	 
	
	
	
	
	
	Engine.run(engine)
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);

  

  ellipse(ball.position.x,ball.position.y,50,50)
  ground.display()
  
 

 
}