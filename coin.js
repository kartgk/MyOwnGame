class Coin{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        this.width = 20;
        this.height = 20;
        this.xpos = x;
        this.ypos = y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("yellow");
        ellipse(pos.x,pos.y,this.width,this.height);
    }
}