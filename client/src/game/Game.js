import React, { useEffect, useRef } from "react";
import draw from "./Draw";

function resizeCanvas(canvas) {
  canvas.width = 500;
  canvas.height = 500;
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

      requestAnimationFrame(gameLoop);
    };
    gameLoop();
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
