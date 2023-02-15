function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  drawCandy();
  
}

function drawCandy(){
  if (mouseX < 100){
    fill("powderblue");
  } else if (mouseX >= 100 && mouseX < 200){
    fill("springgreen");
  } else if (mouseX >= 200 && mouseX < 300){
    fill("plum");
  } else {
    fill("hotpink");
  }
  stroke("white");
  triangle(0, 0, 0, 50, 50, 25);
  triangle(100, 0, 100, 50, 50, 25);
  ellipse(50, 25, 50);
}
