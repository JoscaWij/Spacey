import React, { useEffect, useRef } from "react";
import movePlayer from "./movePlayer";

function drawPlayer(player, context) {
  const { width, height, left, top } = player;
  context.fillStyle = "#ff0167";
  context.fillRect(left, top, width, height);
}

function draw(context) {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

/* function movePlayer(keyCode, player) {
  
    if (keyCode === "ArrowRight") {
      
    }
    if (keyCode === "ArrowLeft") {
      
    }
    if (keyCode === "Space" && !player.jumping) {
     
    }
  } */

function resizeCanvas(canvas) {
  //based on Ipone 6/7/8
  canvas.width = 375;
  canvas.height = 667;
}

function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.widh, canvas.height);
}

const player = {
  width: 30,
  height: 50,
  left: 10,
  top: 200,
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
