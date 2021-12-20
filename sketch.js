var bg_img;
var earth, shooter, alienShip;
var earth_img, shooter_img, alienShip_img, enemyShip_img;
var enemyShip;
var life = 3;
var score = 0;
var bullet;

function preload() {
  bg_img = loadImage("spacebg.png");
  earth_img = loadImage("earth.png");
  shooter_img = loadImage("shooter.png");
  enemyShip_img = loadImage("enemyShip.png");
  bullet_img = loadImage("bullet.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  earth = createSprite(-100, 300, 20, 100);
  earth.addImage(earth_img);
  earth.scale = 3;

  shooter = createSprite(200, 300, 50, 50);
  shooter.addImage(shooter_img);
  shooter.scale = 0.5;


  
  //shooter.rotate(20 * Math.PI / 180);



}

function draw() {
  background(bg_img);  
  

  if (keyDown(UP_ARROW)) {
    shooter.y = shooter.y - 5;
  }
  if (keyDown(DOWN_ARROW)) {
    shooter.y = shooter.y + 5;
  }

  //if (shooter.y <= 0) {}

  console.log(life);

  spawnEnemyShips();

  drawSprites();


}

function spawnEnemyShips() {

  if (frameCount % 60 == 0) {
    enemyShip = createSprite(1100, random(50, 550), 40, 40);
    enemyShip.addImage(enemyShip_img);
    enemyShip.scale = 0.187;
    enemyShip.velocityX = -5
    enemyShip.lifetime = 400;
  }


}

function ammunition() {

}