let cam, img;
let graphics;
let camLoaded = false; // Flag to check if camera has been initialized

function preload() {
  img = loadImage('images/I-AM-NEGATIVE.svg'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  cam = createCapture(VIDEO, () => {
    camLoaded = true; 
  });
  cam.hide();
  graphics = createGraphics(windowWidth, windowHeight);
}

function draw() {
  background(255);

  if (!camLoaded) {
    return; 
  }

  let camAspectRatio = cam.width / cam.height;

  let scaledWidth = windowWidth; 
  let scaledHeight = scaledWidth * (img.height / img.width);

  graphics.clear();
  graphics.imageMode(CENTER);
  graphics.image(img, windowWidth / 2, windowHeight / 2, scaledWidth, scaledHeight);

  translate(windowWidth / 2, windowHeight / 2);
  image(cam, 0, 0, windowWidth, windowWidth / camAspectRatio); 
  image(graphics, 0, 0, windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  graphics = createGraphics(windowWidth, windowHeight);
}
