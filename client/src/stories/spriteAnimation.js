import React, { useEffect, useRef } from "react";
import { playerImage } from "./assets/spriteSheet";

/*
one image: 180 x 240 = srcWidth x srcHeight
rows & cols = 4
*/

function drawPlayerSprite(player, context) {
  const { width, height, left, top } = player;

  const srcWidth = 180;
  const srcHeight = 240;
  const startRow = 1;
  const startCol = 0;
  const srcX = srcWidth * startCol;
  const srcY = srcHeight * startRow;

  context.beginPath();
  context.drawImage(
    playerImage,
    srcX,
    srcY,
    srcWidth,
    srcHeight,
    left,
    top,
    width,
    height
  );
  context.fillStyle = "#ff0167";
  context.fill();
  context.closePath();
}

function draw(context) {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

function rotatePlayer(keyCode) {
  if (keyCode === "ArrowRight") {
    console.log("arrow right - show right side of player");
  }
  if (keyCode === "ArrowLeft") {
    console.log("arrow left - show side of player");
  }
  if (keyCode === "Space") {
    console.log("show jumping player");
  }
}

function resizeCanvas(canvas) {
  //based on Ipone 6/7/8
  canvas.width = 375;
  canvas.height = 667;
}

function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.widh, canvas.height);
}

const player = {
  width: 180,
  height: 240,
  left: 10,
  top: 200,
};

const SpriteAnimation = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);

    function startGameLoop() {
      const gameLoop = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        clearCanvas(canvas, context);
        draw(context);

        drawPlayerSprite(player, context);

        requestAnimationFrame(gameLoop);
      };
      gameLoop();
      window.addEventListener("keydown", (event) =>
        rotatePlayer(event.code, player)
      );
    }
    startGameLoop();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default SpriteAnimation;
