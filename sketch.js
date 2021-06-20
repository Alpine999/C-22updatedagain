const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here

var bob1
var bob2
var bob3
var bob4
var bob5

var rope1
var rope2
var rope3
var rope4
var rope5


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob_options={
	isStatic: true,
	restitution:0.8	
	}
	
	bob1 = Bodies.circle(300,350,35,bob_options);
	bob2 = Bodies.circle(340,350,35,bob_options);
	bob3 = Bodies.circle(380,350,35,bob_options);
	bob4 = Bodies.circle(420,350,35,bob_options);
	bob5 = Bodies.circle(460,350,35,bob_options);

	
{
	con = Matter.Constraint.create({
		pointA:{x:300,y:350},
		bodyB:bob1,
		pointB:{x:300,y:100},
		length:200,
		stifness:0.1
	});
	
	con2 = Matter.Constraint.create({
		pointA:{x:340,y:350},
		bodyB:bob2,
		pointB:{x:340,y:100},
		length:200,
		stifness:0.1
	});

	con3 = Matter.Constraint.create({
		pointA:{x:380,y:350},
		bodyB:bob3,
		pointB:{x:380,y:100},
		length:200,
		stifness:0.1
	});
	
	con4 = Matter.Constraint.create({
		pointA:{x:420,y:350},
		bodyB:bob4,
		pointB:{x:420,y:100},
		length:200,
		stifness:0.1
	});

	con5 = Matter.Constraint.create({
		pointA:{x:460,y:350},
		bodyB:bob5,
		pointB:{x:460,y:100},
		length:200,
		stifness:0.1
	});

}
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  
  //call display() to show ropes here

push();
strokeWeight(2);
stroke(225);
line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y)
pop();

push();
strokeWeight(2);
stroke(225);
line(con2.pointA.x,con2.pointA.y,bob2.position.x,bob2.position.y)
pop();

push();
strokeWeight(2);
stroke(225);
line(con3.pointA.x,con3.pointA.y,bob3.position.x,bob3.position.y)
pop();

push();
strokeWeight(2);
stroke(225);
line(con4.pointA.x,con4.pointA.y,bob4.position.x,bob4.position.y)
pop();

push();
strokeWeight(2);
stroke(225);
line(con5.pointA.x,con5.pointA.y,bob5.position.x,bob5.position.y)
pop();


  
  //create ellipse shape for multiple bobs here
ellipse(bob1.position.x,bob1.position.y,35)
ellipse(bob2.position.x,bob2.position.y,35)
ellipse(bob3.position.x,bob3.position.y,35)
ellipse(bob4.position.x,bob4.position.y,35)
ellipse(bob5.position.x,bob5.position.y,35)

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if (keyCode == RIGHT_ARROW)
	{
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0})
	}
}