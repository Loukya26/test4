
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(600,400);


	engine = Engine.create();
	world = engine.world;


	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball = Bodies.circle(50,348,30,ball_options)
	ground = new Ground(300,370,650,10)
	left = new Ground(400,328,10,70)
	right = new Ground(550,328,10,70)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,30,30)
  ground.display()
  left.display()
  right.display()
  
  drawSprites();
 
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0})
 }

function keyPressed(){
	if(keyCode == UP_ARROW){
		hForce()
	}	
}
