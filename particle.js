class Particle {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
      this.body = Bodies.circle(x,y,this.radius,options)
      this.color = color( math.random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
}