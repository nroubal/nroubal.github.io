function setup() {
  	createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(255);

  if (mouseIsPressed) {
    fill(255,0,0);
  }

  stroke(0);
  ellipse(mouseX, mouseY, 60, 60);

  // foreground
  fill(255);
  stroke(0);
  rect(width * 0.25, height * 0.25, 0.5 * width, 0.5 * height);

  if(mouseX > (width * 0.25 + 30) && mouseX < (width * 0.75 - 30) && mouseY > (height * 0.25 + 30) && mouseY < (height * 0.75 - 30))
  {
    fill(255,0,0);
    stroke(255,0,0);
    fill(0);
    stroke(0);

    ellipse(mouseX, mouseY, 60, 60);
  }
  
  //fill(0);
  stroke(255);
  textAlign(CENTER);
  textSize(width * 0.03);
  text("nicholasroubal@gmail.com\nwebsite wip :-)", 0.5 * width , 0.5 * height);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}