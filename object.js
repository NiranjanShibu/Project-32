class Object1{
    constructor(x, y, width, height, i) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage(i);
        this.Visiblity = 255;
        World.add(world, this.body);
      }

      display(){
        if(this.body.speed < 8){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
          }
        else{
          World.remove(world, this.body);
          //push();
          //this.Visiblity = this.Visiblity - 5;
          //tint(255,this.Visiblity);
          //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          //pop();
        }
        
      }
}