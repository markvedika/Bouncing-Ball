const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine, world;
var ball, ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_option = {
    isStatic: true
}
var ball_option = {
  restitution: 0.3
}
  ball=Bodies.circle(200,100,20, ball_option);
  World.add(world,ball);
  ground=Bodies.rectangle(200,390,200,10,ground_option);
  World.add(world,ground);
}

function draw() {
  background(0); 
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,10);
}