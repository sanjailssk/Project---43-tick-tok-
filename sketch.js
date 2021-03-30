var hr,mn,sc;
var scAngle,mnAngle,hrAngle;

function setup() {
  createCanvas(400,450);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);


  translate(200,200);

  rotate(-90);

  //drawing seconds hand
  push();
  noFill();
  rotate(scAngle);//rotate the angle based on angle calaculated
  stroke("red");
  arc(0,0,300,300,0,scAngle);
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  //drawing minutes hand
  push();
  noFill();
  rotate(mnAngle);//rotate the angle based on angle calaculated
  stroke(1,252,10);
  strokeWeight(9);
  arc(0,0,280,280,0,mnAngle);
  line(0,0,80,0);
  pop();

  //drawing hours hands
  push();
  noFill();
  rotate(hrAngle);//rotate the angle based on angle calaculated
  stroke(1,2,246);
  strokeWeight(9);
  arc(0,0,260,260,0,hrAngle);
  line(0,0,55,0);
  pop();

  drawSprites();
  console.log(hrAngle);
}