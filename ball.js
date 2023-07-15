class Ball{
 constructor(x,y,r){
  var body_options = {
 
  };
this.body = Bodies.circle(x,y,r,body_options);
this.r = r;
World.add(world,this.body);
 }

 show(){
  var pos = this.body.position;
  push();
  ellipseMode(CENTER);
  stroke(255);
  fill(42);
  ellipse(pos.x,pos.y,this.x,this.y);
  pop();
 }
}