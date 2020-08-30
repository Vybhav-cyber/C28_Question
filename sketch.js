const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  engine, world;
var mango1, treeImg, boyImg, boy, tree;
var mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var ground, tree, stone, sling;

function preload()
{
//	boyImg = loadImage("Images/boy.png");
	

}

function setup() {
	var canvas = createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

//    boy = createSprite(200,525,20,20);
//	boy.addImage(boyImg);
//	boy.scale = 0.1;
//	treeImg = loadImage("Images/tree.png");
		
	
	ground = new Ground(500,590,1000,20);
	stone = new Stone(200,50,45,45);
	sling = new Launcher(stone.body,{x:200, y:50});
	mango1 = new Mango(700,300,60);
	mango2 = new Mango(760,250,60);
	mango3 = new Mango(800,300,60);
	mango4 = new Mango(675,300,60);
	mango5 = new Mango(900,300,60);
//	mango6 = new Mango(870,300,60);
//	mango7 = new Mango(550,350,60);
//	mango8 = new Mango(800,200,60);
	boy = new Boy(100,300,200,400);
	tree = new Tree(600,100,300,500);

//	tree = createSprite(750,400,20,20);
//	tree.addImage(treeImg);
//	tree.scale = 0.4;

	//Engine.run(engine);
  
}


function draw() 
{
//  rectMode(CENTER);
  background("grey");
Engine.update(engine);
  ground.display();

    
	 boy.display();
	 stone.display();
	tree.display();  
//sling.attach(stone.body);
//sling.fly();

  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  //mango6.display();
  //mango7.display();
  //mango8.display();
//  ground.display();
 // boy.display();
 // tree.display();
 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);

 
//  drawSprites();
sling.display();

}

function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
{
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

}

/*
function mouseDragged(){
    if(GameState !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }

}


function mouseReleased(){
    slingshot.fly();
    GameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
*/
function keyPressed(keyCode = 32){
    if(keyCode === 32){
	//	Matter.Body.setPosition(stone.body,{x:235, y:420})*/
		sling.attach(stone.body);
		
    }
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
