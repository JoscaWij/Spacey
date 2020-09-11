import React, { useEffect, useRef } from "react";

const Game = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "#ff0167";
    context.fillRect(30, 30, 30, 30);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
