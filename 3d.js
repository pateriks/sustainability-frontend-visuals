let angle = 0;
let w = 24;
let ma;
let maxD;
var speed = 0.01;
var param = 0.1;
function setup() {
    createCanvas(400, 400, WEBGL);//, WEBGL);
    ma = atan(cos(QUARTER_PI));
    maxD = 200;

    //rotateY(-PI/4);﻿
}

function draw() {
    rotateX(-ma);
    background(100);
    ortho(-400, 400, 400, -400, 0, 1000);


  for (let z = 0; z < height; z += w) {
      push();
      let d = abs(z - (height / 2));
      let offset = map(d, maxD, height, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 100, 300));
      translate(z - width / 2, 0, z - height / 2); //x
      //normalMaterial();
      if(angle%1 == 0) {
          fill(255, 255, 0);
      }
      box(w, h, w);
      pop();
  }
  angle += 0.1;
}
