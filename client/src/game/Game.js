import React, { useEffect, useRef } from "react";

const Game = () => {
  const canvasRef = useRef(null);

  function resizeCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);
  });

  return <canvas ref={canvasRef} />;
};

export default Game;
