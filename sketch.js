let options = ['   Driver','   Midrange','Off Hand FH','Off Hand BH',' Normal BH','  Normal FH','Tomahawk', 'Roller', '360 Spin', '       Putter', 'New Mando']
let color = []
let r = 0;
let l = 0;

function setup() {
  createCanvas(400, 400);
  background(100);
  //Button
  button = createButton('Start / Stop');
  button.position(width / 2 - 35, 365);
  button.mousePressed(stop);
  frameRate(250)
  // Color values
  for (let i = 0; i < options.length; i++) {
    color[i] = [];
    for (let j = 0; j < 3; j++) {
      color[i][j] = random(20,240)
    }
  }
}

function draw() {
  background(100);
  noStroke(50);
  translate(width / 2, height / 2);
  //wedges
  for (let i = 0; i < options.length; i++) {
    push();
    fill(color[i][0], color[i][1], color[i][2]);
    rotate(radians(r * 45));
    arc(0, 0, 300, 300, ((2 * PI) / options.length) * (i + 1), (2 * PI) / options.length);
    pop();
    push();
    rotate(radians(r * 45));
    fill(255);
    rotate(((2 * PI) / options.length) * (i + 1) + PI / options.length);
    textSize(18);
    text(options[i], 40, 7)
    pop();
  }
  noStroke();
  fill(255, 0, 0);
  triangle(120, 0, 190, 15, 190, -15);
  r++;
}

function stop() {
  if (l % 2 == 1) {
    noLoop();
  } else {
    loop();
  }
  l++
}
