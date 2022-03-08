
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  roof = new Ground(410,150,470,20);

	//Create the Bodies Here.
    ground=new Ground(400,690,800,10);
    ball=new Ball(200,350,100,100)
    ball2=new Ball(305,350,100,100)
    ball3=new Ball(410,350,100,100)
    ball4=new Ball(515,350,100,100)
    ball5=new Ball(620,350,100,100) 
    connection1=new Connection({x:210,y:150},ball.body)
     connection2=new Connection({x:310,y:150},ball2.body)
     connection3=new Connection({x:410,y:150},ball3.body)
     connection4=new Connection({x:510,y:150},ball4.body)
     connection5=new Connection({x:610,y:150},ball5.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  roof.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  connection1.display();
  connection2.display();
  connection3.display();
   connection4.display();
   connection5.display();
}



