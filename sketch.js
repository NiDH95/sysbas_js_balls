var x = 320;
var y = 180;
var x2 = 500;
var y2 = 320;
var xspeed = 14;
var yspeed = 11;
var xspeed2 = 12;
var yspeed2 = 10;


var r = 25;                                     //bepaalt de grootte van de bal
var r2 = 60;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background("pink");

  fill("purple");
  noStroke();
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }

  fill("red");
  noStroke();
  ellipse(x2, y2, r2*2, r2*2);
  x2 += xspeed2;
  y2 += yspeed2;
  if (x2 > width - r2 || x2 < r2) {
    xspeed2 = -xspeed2;
  }
  if (y2 > height - r2 || y2 < r2) {
    yspeed2 = -yspeed2;
  }
}
