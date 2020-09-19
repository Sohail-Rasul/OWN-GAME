
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player;
var backgroundImg;
var ground,ground2;

function preload()
{
	backgroundImg=loadImage("images/background.jpg")
}

function setup() {
	createCanvas(1530,750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player=new Player(200,470,100,100);
	ground=new Ground(765,530,700,30);
	ground2=new Ground(765,350,500,30);
	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(backgroundImg);
  
  drawSprites();
  player.display();
  ground.display();
  ground2.display();
  console.log(player)
}

