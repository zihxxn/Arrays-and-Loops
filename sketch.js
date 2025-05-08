let posX = [250, 100, 90, 80];
let posY = [150, 30, 100, 300];
let circleSize = [20, 57, 100, 70];
let circleColor = ['purple', 'skyblue', 'blue', 'purple']; // new array for colors

function setup() {
  createCanvas(400, 400);
  background(240);

  for (let i = 0; i < posX.length; i++) {
    fill(circleColor[i]);         // use color from array
    stroke(0);
    strokeWeight(2);
    circle(posX[i], posY[i], circleSize[i]);  // draw circle from arrays
  }
}
