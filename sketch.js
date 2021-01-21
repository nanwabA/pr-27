
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint ;

var chain,chain3,chain4,chain5,chain6;
var bob,bob2,bob3,bob4,bob5,bob6;
var chain1;
var chain2


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob=new Bob(100,600,50)

  bob2= new Bob(200,600,50)


  bob3= new Bob(300,600,50)

  bob4= new Bob(400,600,50)

  bob5= new Bob(500,600,50)

  bob6= new Bob(600,600,50)

chain1=new Chain(bob.body,{x:100,y:100})


chain2=new Chain(bob2.body,{x:200,y:100})


chain3=new Chain(bob3.body,{x:300,y:100})

chain4=new Chain(bob4.body,{x:400,y:100})


chain5=new Chain(bob5.body,{x:500,y:100})


chain6=new Chain(bob6.body,{x:600,y:100})

roofSprite=createSprite(width/2, height-600, width-150,40);
roofSprite.shapeColor=color("black")




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  
bob.display()
  chain1.display()
  chain3.display()
  chain4.display()
  chain5.display()
  chain6.display()

  bob2.display()
  chain2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  bob6.display()

  drawSprites();
 

}



