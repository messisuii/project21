class Ground
{
constructor(x,y,width,height)
{
this.x=x
this.y=y
this.width=width
this.height=height

options={
isStatic:2

}
this.body=Bodies.rectangle(this.x,this.y,width,height,options)
World.add(world,this.body)
}
display(){
rect(this.body.position.x,this.body.position.y,this.height,this.width)
}
}