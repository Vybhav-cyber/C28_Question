/*
class Stone {
    constructor(x,y, radius){    
    var options ={
        isStatic: false,
        restitution: 0,
        friction: 1.0,
        density: 1.2
     }
     this.radius = radius;
     this.x =x;
     this.y =y;
     this.image = loadImage("Images/stone.png");
     this.body = Bodies.circle(x,y,radius, options);
     World.add(world, this.body);
  }
  
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    imageMode(CENTER); 
    image(this.image, 0 , 0, this.radius, this.radius)

    pop();  }
  };
*/




/*
class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50, 50);
      this.image = loadImage("Images/stone.png");
    }
  
    display() {
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      imageMode(CENTER); 
      image(this.image, 0 , 0, this.radius)
  
      pop();
  
      super.display();
    }
  }
  */

 class Stone extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("Images/stone.png");
  }

};
