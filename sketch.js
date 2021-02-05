
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var sand;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(100,200,100,50);
	plane=new Plane(300,height,1200,20);
	stone= new Stone(600,100,70,70);
	rubber=new  Rubber(500,400,50,50);
	sand=new Sand(200,200,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");


	hammer.display();
	plane.display();
	stone.display();
	rubber.display();
	sand.display();
		





  drawSprites();
 
}



