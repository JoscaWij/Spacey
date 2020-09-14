import React, { useEffect, useRef } from "react";
import draw from "./draw";
import drawPlayer from "./drawPlayer";

function resizeCanvas(canvas) {
  //based on Ipone 6/7/8
  canvas.width = 375;
  canvas.height = 667;
}

function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.widh, canvas.height);
}

const Game = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);

    const gameLoop = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      clearCanvas(canvas, context);
      draw(context);

      const player = {
        width: 30,
        height: 50,
        offsetLeft: 10,
        offsetTop: 0.7 * canvas.height,
      };

      drawPlayer(player, context);

      requestAnimationFrame(gameLoop);
    };
    gameLoop();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
