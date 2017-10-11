var sizes = [40, 70, 50, 30, 60,15,20,10,5];

function setup() {
  createCanvas(600, 600);

  noStroke();
    
  for (var i = 0; i < sizes.length; i += 1) {
    fill(sizes[i]);
ellipse(50+i*65, height/2, sizes[i], sizes[i]);
  }
}
