(function() {
    const requestAnimationFrame = window.requestAnimationFrame 
    window.requestAnimationFrame = requestAnimationFrame;
})

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
console.log(ctx);
width = "1000";
height = "500";
guy = {
  x: width / 2,
  y: height - 30,
  width: 30,
  height: 30,
  runSpeed: 3,
  jumpHeight: 5,
};
keys = [];

canvas.width = width;
canvas.height = height;
ctx.fillStyle = "blue";
ctx.fillRect(guy.x, guy.y, guy.width, guy.height);



function moveIt() {
  switch()(
        case 37: //key left
       
            break;
        case 38: //key up
       
            break;
        case 39: //key right
      
            break; //key down
        case 40:
     
            break;
  )
}

function render(){
  requestAnimationFrame(render);
  moveIt()}
  
friction = 0.5;
gravity = 1;

console.log('hey')