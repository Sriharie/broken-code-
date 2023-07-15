class Ground{
 constructor(x,y,w,h){
  var body_options = {
isStatic:true
  };
this.body = Bodies.rectangle(x,y,w,h,body_options);
this.w = w;
this.h = h;
World.add(world,this.body);
 }

 show(){
  var pos = this.body.position;
  push();
  rectMode(CENTER);
  stroke(255);
  fill(42);
  rect(pos.x,pos.y,this.x,this.y);
  pop();
 }
}