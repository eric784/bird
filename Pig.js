class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
   console.log(this.body.speed);
if(this.body.speed < 2.5){
  super.display()
}
else(){
  world.remove(world, this.body)
  Visibility = Visibility - 5
  tint(255, this.Visibility=Visibility-5)
  push()
  image(this.image, this.position.x, this.position.y, 50, 50)
  pop()
}
   
 }


}