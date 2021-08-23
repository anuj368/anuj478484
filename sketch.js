var ball;
var btn2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var con;


let engine;
let world;

var ground;

var top_wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  btn2=createImg("up.png");
btn2.position(20,30);
btn2.size(50,40)
btn2.mouseClicked(vForce);

  ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(50,200,30,20);
  top_wall1 = new Ground(150,200,30,20);
  top_wall2 = new Ground(250,200,30,20);
  top_wall3 = new Ground(350,200,30,20);

  var ball_options={
  resitution:0.95}
ball=Bodies.circle(120,210,20,ball_options)  
World.add(world,ball);


con=Matter.Constraint.create({
pointA:{x:200,y:20},
bodyB:ball,
pointB:{x:0,y:0},
length:100,
stifness:0.1})
World.add(world,con);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
ellipse(ball.position.x,ball.position.y,20)  

  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  Engine.update(engine);

  strokeWeight(2);
stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);

}

function vForce(){
Matter.Body.applyForce(
ball,{x:0,y:0},
{x:0.05,y:0.5}
);

}
