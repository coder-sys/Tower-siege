class Obj extends Baseclass{
    constructor(x,y,stati){
        super(x,y,200,10)
        Matter.Body.setStatic(this.body,stati)
    }
    display(){
        super.display()
    }

}