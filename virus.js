class Virus{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        this.width = 20;
        this.height = 20;
        World.add(world,this.body);
    }
    display(){
        fill("green");
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}