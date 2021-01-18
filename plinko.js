class Plinko {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
     
    }
}