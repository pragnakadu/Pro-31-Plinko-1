const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world , engine
var Ground1 


var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300 


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  

  Ground1 = new Ground(400,790,800,20)


  for (var k = 0 ; k <=width ; k= k + 80 ) {
    divisions.push( new Division( k , height-divisionHeight/2 , 10 , divisionHeight))
  }

for (var j = 40 ; j<=width ; j=j+50){
  plinkos.push(new Plinko(j,75));
}

for (var j = 15; j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175))
}
  



}






function draw() {
  background(0,255,255)
  Engine.update(engine)
  
  

  for ( var i = 0 ; i < plinkos.length ; i++ ){

    plinkos[i].display()
  }

  
  
  
  for (var k = 0 ; k < divisions.length ; k++){

    divisions[k].display()
  }

  if(frameCount%50 === 0 ){
    particles.push(new Particle (random(width/2-10,width/2+10),10,10 ))
    }

  for (var g = 0 ; g<particles.length ; g++ ){

    particles[g].display()
    //particles.isStatic = false
  }
  
  Ground1.display()

  
}
 
