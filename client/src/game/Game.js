import React, { useEffect, useRef } from "react";

function resizeCanvas(canvas) {
  canvas.width = document.body.clientWidth;
  canvas.height = window.innerHeight;
}

const Game = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);
  });

  return <canvas ref={canvasRef} />;
};

export default Game;
