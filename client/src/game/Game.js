import React, { useEffect, useRef } from "react";
import draw from "./draw";
import drawPlayer from "./drawPlayer";
import movePlayer from "./movePlayer";

function resizeCanvas(canvas) {
  //based on Ipone 6/7/8
  canvas.width = 375;
  canvas.height = 667;
}

function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.widh, canvas.height);
}

const physics = {
  friction: 0.7,
};

const player = {
  width: 30,
  height: 50,
  left: 10,
  top: 450,
  offsetX: 0,
  offsetY: 0,
};

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
        player.left += player.offset;

        requestAnimationFrame(gameLoop);
      };
      gameLoop();
      window.addEventListener("keydown", (event) =>
        movePlayer(event.code, player)
      );
    }
    startGameLoop();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
