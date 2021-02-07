const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
var drop = [];
var maxdrops = 10;
function preload(){
    
}

function setup(){
    createCanvas(400,1000);
    background("black");
   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);
 
  for(i=0;i<maxdrops;i++){
      drop.push(new Drop(random(0,400),random(0,400),10))
  }
  


}

function draw(){
    Engine.update(engine);
    for(i=0;i<maxdrops;i++){
        drop[i].display();
    }
  
  
  
}   

