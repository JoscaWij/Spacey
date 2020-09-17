import React, { useEffect, useRef } from "react";
import draw from "./draw";
import drawPlayer from "./drawPlayer";
import movePlayer from "./movePlayer";
import rotatePlayer from "./rotatePlayer";

function resizeCanvas(canvas) {
  //based on Ipone 6/7/8
  canvas.width = 375;
  canvas.height = 667;
}

function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.widh, canvas.height);
}

function handleKeyDown(event) {
  movePlayer(event.code, player);
  rotatePlayer(event.code, player);
}

const physics = {
  friction: 0.7,
  gravity: 1,
};

const player = {
  width: 30,
  height: 50,
  left: 10,
  top: 200,
  offsetX: 0,
  offsetY: 0,
  jumping: true,
  direction: "FRONT",
};

const floor = 500;

const Game = (props) => {
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

        drawPlayer(player, context);

        player.offsetX *= physics.friction;
        player.left += player.offsetX;
        player.offsetY += physics.gravity;
        player.top += player.offsetY;

        if (player.top > floor - player.height) {
          player.offsetY = 0;
          player.top = floor - player.height;
          player.jumping = false;
        }

        requestAnimationFrame(gameLoop);
      };
      gameLoop();

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
    startGameLoop();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
