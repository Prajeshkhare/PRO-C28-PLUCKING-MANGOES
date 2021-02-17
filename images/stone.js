class Stone{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.stone = loadImage('sprites/stone.png');
        this.pointB = pointB
        this.Stone = Constraint.create(options);
        World.add(world, this.Stone);
    }
    attach(body){
        this.Stone.bodyA = body;
    }
    
    fly(){
        this.Stone.bodyA = null;
    }

    display(){
        image(this.Stone,200,20);
        if(this.Stone.bodyA){
            var pointA = this.Stone.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.Stone3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.Stone3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}