import React, { useEffect, useRef } from "react";

const Game = (props) => {
  const canvasRef = useRef(null);

  const draw = (context) => {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "#ff0167";
    context.fillRect(30, 30, 30, 30);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context);
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
