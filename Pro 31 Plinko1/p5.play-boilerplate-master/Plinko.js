class Plinko{
    constructor(x , y , r)
    {

        var options = {
            restitution : 1 , 
            isStatic : true,
            friction : 0
            

        }

        
        this.r = 10
        this.body = Bodies.circle( x , y , this.r/2 , options)
        World.add(world , this.body)

    }

    display(){

        var PlinkoPos=this.body.position;		
            var angle = this.body.angle
			push()
			translate(PlinkoPos.x, PlinkoPos.y);
			rotate(angle);
            ellipseMode(RADIUS); 
            ellipse(0,0,this.r,this.r);
            pop()
            
            
    }
}