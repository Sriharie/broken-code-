var engine, world;
var ground1;
ball1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup(){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
ground1 = new Ground(200,390,400,15);
rectMode(CENTER);
ball1 = new Ball(200,100,15);
ellipseMode(CENTER);
}

function draw(){
background("white");
ground1.show();
ball1.show();
Engine.update(engine);
}