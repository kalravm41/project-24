class Log1 {
    constructor(x, y, width,angle) {
      var options = {
          'restitution':0.2,
          'friction':1.0,
          'density':1.0,
         
      }
      
      this.body = Bodies.rectangle(x, y,width, 20, options);
      this.width = width;
      this.height = 20;
      Matter.Body.setAngle(this.body , angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
 