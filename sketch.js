const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let pepe;

function preload() {
  pepe = loadImage("pepe48.jpg");
}

function setup() {
  noCanvas();
  pepe.loadPixels();
  
  // Get brightness of each pixel
  for (let j = 0; j < pepe.height; j++) {
    let row = '';
    for (let i = 0; i < pepe.width; i++) {
      const pixelIndex = (i + j * pepe.width) * 4;
      const r = pepe.pixels[pixelIndex + 0];
      const g = pepe.pixels[pixelIndex + 1];
      const b = pepe.pixels[pixelIndex + 2];
      // Setting brightness as average of RGB values
      const avg = (r + g + b) / 3;  
      
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));
      
      // Print space
      const c = density.charAt(charIndex);
      if (c == ' ')
        row += '&nbsp;';
      else 
        row += c;
    }
    createDiv(row);
  }
}