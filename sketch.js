let cam, img;
let graphics;

function preload() {
  img = loadImage('images/I-AM-NEGATIVE.svg'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowWidth / 1.33); // Maintain 4:3 aspect ratio
  cam.hide(); 
  graphics = createGraphics(windowWidth, windowHeight);
}

function draw() {
  background(255);

  let scaledWidth = windowWidth; 
  let scaledHeight = scaledWidth * (img.height / img.width);

  graphics.clear();
  graphics.imageMode(CENTER);
  graphics.image(img, windowWidth / 2, windowHeight / 2, scaledWidth, scaledHeight); 
  translate(windowWidth /2 , windowHeight / 2);
  image(cam,0,0,windowWidth,0);
  image(graphics, 0, 0, windowWidth, windowHeight); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cam.size(windowWidth, windowWidth / 1.33); // Adjust webcam size on window resize to maintain 4:3 aspect ratio
  graphics = createGraphics(windowWidth, windowHeight); 
}
