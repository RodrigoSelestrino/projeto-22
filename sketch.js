const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var opitions = {isStatic:true} 
  
  
  //criar corpo da base do jogador
  playerBase=Bodies.rectangle(170,260,80,50,opitions)
  World.add(world,playerBase)
  //criar corpo do jogador
  player=Bodies.rectangle(200,200,30,60,opitions)
  World.add(world,player)


}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
 image(playerimage,player.position.x,player.position.y,30,60)
 image(baseimage,playerBase.position.x,playerBase.position.y,80,50)
  //exibir a imagem da base do jogador usando a função image()


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
