class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trail = loadImage("sprites/smoke.png");
    this.trajectory=[];
    //p1,p2,p3..pn
    //[p1,p2,p3,..pn]  [[x1,y1],[x2,y2]....[xn,yn]] x=0,y=1
  }
    //this.body.position
    //p1,p2,p3....pn
   // var pos=p1,p2....
  display(){
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  
    super.display();

    if(this.body.position.x > 200 && this.body.velocity.x > 10){
      var position =[this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }
    
    for(var i = 0; i < this.trajectory.length; i++){
      image(this.trail,this.trajectory[i][0],this.trajectory[i][1]);
    }
}
}