const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(ctx);
width = 1000;
height = 500;
guy = {
  x: width / 2,
  y: height - 30,
  width: 30,
  height: 30,
  velX: 0,
  velY: 25,
  speed: 5,
  isJumping: false
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
  // keys[e.keyCode] = true;
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
    guy.y = height - guy.height;
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
  gravity: 0.2,
};

const map = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,],
  [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,],
  [1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,],
  [1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,],
  


];

const buildMap = function(){
const mappyFind = document.getElementById('canvas').getContext('2d');


for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[i].length; j++) {
        if (map[i][j] === 1) {
          mappyFind.fillStyle = 'darkgrey';
          mappyFind.fillRect(j * 50, i * 50, 50, 50);
        }

    }
}

for (var i = 0; i < map.length; i++) {
  for (var j = 0; j < map[i].length; j++) {
      if (map[i][j] === 2) {
          mappyFind.fillStyle = 'red';
          mappyFind.fillRect(j * 50, i * 50, 50, 50);
      }

  }
}
}

