class Drop
{
constructor(x,y,radius){
    var options = {isStatic:false,friction:0.1};
    
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;

World.add(world,this.body);

}
display(){
var pos = this.body.position;
stroke("blue");
fill("blue");
ellipseMode(CENTER);
    ellipse(pos.x,pos.y,5,5);
   if(this.body.position.y>1000){

    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,10)});

   }

    console.log(this.body);
}
   
}


