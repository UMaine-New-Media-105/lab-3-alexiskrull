function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  drawCandy(0, 0, "powderblue", "springgreen", "plum", "hotpink");
  drawCandy(0, 100, "red", "cyan", "rebeccapurple", "thistle");
  drawCandy(0, 200, "blue", "green", "gold", "maroon");
}

function drawCandy(x, y, c1, c2, c3, c4){
  push();
  translate(x, y);
  if (mouseX < 100){
    fill(c1);
  } else if (mouseX >= 100 && mouseX < 200){
    fill(c2);
  } else if (mouseX >= 200 && mouseX < 300){
    fill(c3);
  } else {
    fill(c4);
  }
  stroke("white");
  triangle(0, 0, 0, 50, 50, 25);
  triangle(100, 0, 100, 50, 50, 25);
  ellipse(50, 25, 50);
  pop();
}
