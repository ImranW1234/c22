const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

//bodies
var ball;
var ground;

function setup(){
createCanvas(400,400);

engine = Engine.create();
world = engine.world;

var groundOption = {
  isStatic: true
  
}

ground = Bodies.rectangle(200,390,400,20,groundOption);

World.add(world,ground);

var ballOption = {
  restitution: 1
}

ball = Bodies.circle(200,20,20,ballOption);

World.add(world,ball);

console.log(ball);
}

function draw(){
  background("black");

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);

}