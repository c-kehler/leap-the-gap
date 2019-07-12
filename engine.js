const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);
width = 1000;
height = 500;
const levelRows = 10;
const levelCols = 20;
const tileSize = 50;
guy = {
  isJumping: false,
  x: 0,
  y: 9,
  width: 30,
  height: 30,
  velX: 0,
  velY: 25,
  speed: 5,
  tile_x: null,
  tile_y: null
};
keys = [];

canvas.width = width;
canvas.height = height;

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(guy.x, guy.y, guy.width, guy.height);
  requestAnimationFrame(play);
}

addEventListener("keydown", function(event) {
  keys[event.keyCode] = true;
});

addEventListener("keyup", function(event) {
  delete keys[event.keyCode];
});

function moveIt(e) {
  guy.x += guy.velX;
  guy.velX *= physics.friction;

  if (keys[68]) {
    if (guy.velX < guy.speed) {
      guy.velX++;
    }
  }

  if (keys[32]) {
    if (!guy.isJumping) {
      guy.isJumping = true;
      guy.velY = -guy.speed * 2;
    }
  }

  if (keys[65]) {
    if (guy.velX > -guy.speed) {
      guy.velX--;
    }
  }
}

function jump() {
 
  guy.velY += physics.gravity;
  guy.y += guy.velY;
  if (guy.y >= height - guy.height) {
    if (guy.y <= 350) {
      guy.y = 350
    }
    else{
    guy.y = height - guy.height;
     
    }
    guy.isJumping = false; 
  }
}

function play() {
  if (guy.x >= width - guy.width) {
    guy.x = width - guy.width;
  } else if (guy.x <= 0) {
    guy.x = 0;
  }
  jump();
  moveIt();
  render();
  buildMap();
}

window.onload = function() {
  play();
};

physics = {
  friction: 0.9,
  gravity: 0.1
};

const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1]
];
// setInterval(function() {
//   console.log(`x: ${(guy.tile_x = Math.floor(guy.x / 50 + 1))}`);
//   console.log(`y: ${(guy.tile_y = Math.floor(guy.y / 50))}`);
//   console.log(guy.tile_x * guy.tile_y);
// }, 1000);

const buildMap = function() {
  const mapFind = document.getElementById("canvas").getContext("2d");

  for (i = 0; i < levelRows; i++) {
    for (j = 0; j < levelCols; j++) {
      if (map[i][j] == 1) {
        mapFind.fillStyle = "gray";
        mapFind.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
      }
    }
  }

  for (i = 0; i < levelRows; i++) {
    for (j = 0; j < levelCols; j++) {
      if (map[i][j] == 2) {
        mapFind.fillStyle = "orange";
        mapFind.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
      }
    }
  }
};


