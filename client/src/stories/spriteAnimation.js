import React, { useEffect, useRef } from "react";
import { playerImage } from "./assets/spriteSheet";

/*
one image: 180 x 240 = srcWidth x srcHeight
rows & cols = 4
*/

function drawPlayerSprite(player, context) {
  const { width, height, left, top, direction } = player;

  const srcWidth = 180;
  const srcHeight = 240;
  const startCol = 0;
  let startRow;

  switch (direction) {
    case "FRONT":
      startRow = 0;
      break;
    case "LEFT":
      startRow = 1;
      break;
    case "RIGHT":
      startRow = 2;
      break;
    case "JUMPING":
      startRow = 3;
      break;
    default:
      startRow = 0;
      break;
  }

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

function rotatePlayer(keyCode, player) {
  if (keyCode === "ArrowRight") {
    player.direction = "RIGHT";
  }
  if (keyCode === "ArrowLeft") {
    player.direction = "LEFT";
  }
  if (keyCode === "Space") {
    player.direction = "JUMPING";
  }
}

function resizeCanvas(canvas) {
  //based on Ipone 6/7/8
  canvas.width = 220;
  canvas.height = 280;
}

function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.widh, canvas.height);
}

const player = {
  width: 180,
  height: 240,
  left: 10,
  top: 10,
  direction: "FRONT",
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
