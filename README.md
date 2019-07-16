# leap-the-gap

# Leap the Gap
-A canvas platformer

**https://c-kehler.github.io/leap-the-gap/**

## description and user story
-A canvas platformer with a tile based collision detection engine and physics. 

-This project was a great oppertunity to familiarize myself with the canvas element in html5 and create an entire game engine from scratch.

-The game is controlled with w,d keys for left and right movement and spacebar to jump. You can only move while jumping. Be careful the walls are sticky, and the platforms aren't as sturdy as you think!

## technologies & packages
-vanilla js, css, html5

## launch/build
-how do run the game for users who clone your repo

-normally something like `npm install` then `npm run start` or for this type of vanilla project.

## major problems & solutions
-Collision detection based on the two dimensional tile array was a big hurdle. The implementation I use calculates both where the player character is on the map and where he will be next to determine whether or not the can continue moving. This allows the collision detection to only have to calculate a small area surrounding the player instead of the entire map. 

## MVP
-The MVP is a platformer built off of the game engine I coded. There are 8 levels, and losing at anypoint will reset your progress. 

-I added sound effects, win music and canvas drawn gameover and win screens.

## Next steps
-Adding a spritesheet that will be drawn onto the canvas using the array. 

-A life system so that you have multiple attempts

-A level timer

-more levels

## _code snippet_
- This snippet reuses a piece of the collision detection code to determine is the current location of the player is where a lava tile is. When it determines that the player is on a lava tile, it triggers the game over function and some sound effects

```    
for (let j = currentMinY; j <= currentMinY; j++) {
      for (let i = currentMinX; i <= currentMaxX; i++) {
        if (mapArray[j][i] === 2) {
          gameOver();
          burnSound.play();
          screamSound.play();
        }
      }
    } 
  ```
  
  
 ![](gameplay.gif)
