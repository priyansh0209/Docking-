var word, wordimg;
var bg, bgimg;
var iss, issimg;
var spaceCraft, spaceCraftimg;
var spaceLeft, spaceRight, spaceDown;
var hasDocked;

function preload() {
  wordimg = loadImage("images/word.jpg");
  bgimg = loadImage("images/spacebg.jpg");
  issimg = loadImage("images/iss.png");
  spaceCraftimg = loadImage("images/spacecraft1.png");
  spaceLeft = loadImage("images/spacecraft3.png");
  spaceRight = loadImage("images/spacecraft4.png");
  spaceDown = loadImage("images/spacecraft2.png");
}

function setup() {
  createCanvas(600, 400);

  hasDocked = false;
  
  word = createSprite(300, 200, 30, 30);
  word.addImage(wordimg);
  word.scale = 1.2;
  word.visible = false;

  bg = createSprite(400, 200, 800, 800);
  bg.addImage(bgimg);
  bg.scale = 3;

  spaceCraft = createSprite(285, 360);
  spaceCraft.addImage(spaceCraftimg);
  spaceCraft.scale = 0.15;

  iss = createSprite(300, 150, 50, 50);
  iss.addImage(issimg);
  iss.scale = 0.6;
}

function draw() {
  background(255, 255, 255);
  
  if (!hasDocked) {
    if (keyDown("LEFT_ARROW")) {
      spaceCraft.addImage(spaceLeft);
      spaceCraft.x = spaceCraft.x - 5;
    }

    if (keyDown("RIGHT_ARROW")) {
      spaceCraft.addImage(spaceRight);
      spaceCraft.x = spaceCraft.x + 5;
    }

    if (keyDown("DOWN_ARROW")) {
      spaceCraft.addImage(spaceDown);
    }

    if (keyDown("UP_ARROW")) {
      spaceCraft.y = spaceCraft.y - 5;
    }
  }

  if (spaceCraft.y<230&&spaceCraft.y>200&&spaceCraft.x<320&&spaceCraft.x>280) {
    hasDocked = true;
    word.visible = true;
    bg.depth = word.depth;
    word.depth = word.depth+1;
  }
  
  drawSprites();
}