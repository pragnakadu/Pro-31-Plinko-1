class Particle{
    constructor(x , y , r )
    {

        var options = {
            isStatic: false,
            restitution :0.95 ,
            //friction :0 , 
            //density : 1


        }

        
        this.r = r
        this.body = Bodies.circle( x , y , this.r , options)
        
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world , this.body)
    }

    display(){

        var ParticlePos=this.body.position;		
            var angle = this.body.angle
            
			push()
			translate(ParticlePos.x, ParticlePos.y);
            noStroke()
            fill(this.color)
			rotate(angle);
            ellipseMode(RADIUS); 
            ellipse(0,0,this.r,this.r);
            pop()
            
            
    }
}