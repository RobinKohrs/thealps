let height = window.innerHeight;
let width = window.innerWidth;

let start = 0;
let inc = 0.01;
function setup() {
  let cnv = createCanvas(width, height);
  cnv.parent("cc");
}

function draw() {
  inc = mouseX / 100000;
  background(90, 105, 130);
  stroke(0);
  strokeWeight(2);
  noFill();
  beginShape();
  let xoff = start;

  for (let x = 0; x < width; x++) {
    let y = map(noise(xoff), 0, 1, 0, height / 5);
    vertex(x, y);
    xoff += inc;
  }
  endShape();
  //   noLoop();
  start += inc;
}
