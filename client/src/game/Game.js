import React, { useEffect, useRef } from "react";
import draw from "./Draw";

function resizeCanvas(canvas) {
  canvas.width = 5000;
  canvas.height = 5000;
}

const Game = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    resizeCanvas(canvas);
    draw(context);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
