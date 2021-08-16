class SlingShot{
    constructor(bodyA,pointB){
        this.bodyA=bodyA
        this.pointB=pointB

        var Options={length:100,stiffness:0.7,bodyA:this.bodyA,pointB:this.pointB}
        this.Sling=Matter . Constraint.create(Options)
        World .add(world,this.Sling)


    }
    display(){
        if(this.Sling.bodyA){

        
        strokeWeight (5)
        var pointA=this.Sling.bodyA.position
        var pointB=this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }  
        
    }
      
    fly(){
        this.Sling.bodyA=null
    }

}