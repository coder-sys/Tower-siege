const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var s = 0
var engine,world,bse,bs,scoreval,ma,sl,img;
var boxes =[];

function preload(){
    img = loadImage("polygon.png")
}
function setup(){
    var cnvs = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bse = new Obj(600,200,true);
    bs = new Obj(900,240,true);
    ma = Bodies.rectangle(mouseX,mouseY,20,20)
    World.add(world,ma);
    sl = new Sling(ma)
    Engine.run(engine);
    scoreval = 0
}
function mouseDragged(){
    Matter.Body.setPosition(ma,{x:mouseX,y:mouseY})
}
function keyPressed(){
    if(keyCode == 32){
    boxes.push(new Ho(mouseX,mouseY,20,20))
    }
    if(keyCode == 65 && s1.sling.bodyA == null){
        s1.sling.bodyA = ma
    }
}
function draw(){
    background(0);
    Engine.update(engine);
    push()
    bse.display();
    bs.display();
    sl.display();
    translate(ma.position.x,ma.position.y);
    image(img,0,0,30,30)
    pop()
    collision()
    for(var i = 0;i<boxes.length;i++){
        boxes[i].show()
    }
    textSize(40);
    text("No of Boxes:",400,400);
    text(boxes.length,640,400);
}
function mouseReleased(){
    sl.sling.bodyA = null
}
var a = 1
collision = function(){
for(var i =0;i<boxes.length;i++){
    if(ma.position.x - boxes[i].body.position.x > 40){
        s += a
        console.log(s)
        textSize(30)
        text(s,700,400)
        a = 0
        break
    }
    break
}
}
