class Slingshot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:1
    }
    this.string=Constraint.create(options);
    this.pointB=pointB;
    World.add(world,this.string)

}
fly(){
this.string.bodyA=null;
}
attach(body){
    this.string.bodyA=body;
}

display(){
    if(this.string.bodyA){
        var pointA=this.string.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        stroke("red")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}








}
