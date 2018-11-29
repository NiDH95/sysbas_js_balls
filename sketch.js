var x = 320;
var y = 180;
var x2 = 500;
var y2 = 320;
var xSpeed = 14;
var ySpeed = 11;
var xSpeed2 = 12;
var ySpeed2 = 10;

var r = 25;
var r2 = 60;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background("pink");

  fill("purple");
  noStroke();
  ellipse(x, y, r*2, r*2);
  x += xSpeed;
  y += ySpeed;
  if (x > width - r || x < r) {
    xSpeed = -xSpeed;
  }
  if (y > height - r || y < r) {
    ySpeed = -ySpeed;
  }

  fill("red");
  noStroke();
  ellipse(x2, y2, r2*2, r2*2);
  x2 += xSpeed2;
  y2 += ySpeed2;
  if (x2 > width - r2 || x2 < r2) {
    xSpeed2 = -xSpeed2;
    fill(random((250) (250) (250));
  }
  if (y2 > height - r2 || y2 < r2) {
    ySpeed2 = -ySpeed2;
  }
}
