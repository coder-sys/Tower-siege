class Sling{
    constructor(ba){
        this.ba = ba
        var options ={
            bodyA:this.ba,
            pointB:{x:155,y:56},
            stiffness:0.04,
            length:20,
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
            push()
            stroke("white")
            rectMode(CENTER)
            line(155,56,this.sling.bodyA.position.x,ma.position.y);
            pop()
        }
    }
}